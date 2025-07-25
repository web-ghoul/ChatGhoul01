import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model } from 'mongoose';
import { ChatRoom } from 'src/schemas/chatRoom.schema';
import { Message } from 'src/schemas/message.schema';
import { handlePaginationQueries } from 'src/utils/pagination';
import { CreateChatRoomDto } from './dto/create-chat-room.dto';

@Injectable()
export class ChatRoomsService {
  constructor(@InjectModel(ChatRoom.name) private chatRoomsModel: Model<ChatRoom>, @InjectModel(Message.name) private messagesModel: Model<Message>) { }

  async getAllChatRooms(userId: string, query) {
    console.log(userId)
    const { page, limit, skip } = handlePaginationQueries(query);
    const search = query.search?.trim();

    const userObjectId = new mongoose.Types.ObjectId(userId);

    const basePipeline: any[] = [
      {
        $match: {
          participants: userObjectId,
        },
      },
      {
        $lookup: {
          from: 'users',
          localField: 'participants',
          foreignField: '_id',
          as: 'participants',
        },
      },
      {
        $lookup: {
          from: 'messages',
          localField: 'lastMessage',
          foreignField: '_id',
          as: 'lastMessage',
        },
      },
      {
        $unwind: {
          path: '$lastMessage',
          preserveNullAndEmptyArrays: true,
        },
      },
      {
        $lookup: {
          from: 'users',
          localField: 'blockedBy',
          foreignField: '_id',
          as: 'blockedBy',
        },
      },
    ];

    if (search) {
      basePipeline.push(
        {
          $addFields: {
            otherParticipant: {
              $first: {
                $filter: {
                  input: '$participants',
                  as: 'participant',
                  cond: {
                    $ne: ['$$participant._id', userObjectId],
                  },
                },
              },
            },
          },
        },
        {
          $match: {
            $or: [
              { 'otherParticipant.username': { $regex: search, $options: 'i' } },
              { 'otherParticipant.email': { $regex: search, $options: 'i' } },
              { 'otherParticipant.phone': { $regex: search, $options: 'i' } },
            ],
          },
        }
      );
    }

    const paginatedPipeline = [
      ...basePipeline,
      {
        $addFields: {
          sortDate: {
            $ifNull: ['$lastMessage.createdAt', '$createdAt'],
          },
        },
      },
      {
        $sort: {
          sortDate: -1,
        },
      },
      {
        $skip: skip,
      },
      {
        $limit: limit,
      },
    ];

    const countPipeline = [
      ...basePipeline,
      {
        $count: 'total',
      },
    ];

    const [data, totalCountResult] = await Promise.all([
      this.chatRoomsModel.aggregate(paginatedPipeline),
      this.chatRoomsModel.aggregate(countPipeline),
    ]);

    const total = totalCountResult[0]?.total || 0;

    return {
      data,
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
    };
  }

  async getChatRoom(id: string, query) {
    const { page, limit, skip } = handlePaginationQueries(query)

    const filter: any = { chatRoom: id };

    if (query.search) {
      filter.msg = { $regex: query.search, $options: 'i' };
    }

    const [messages, total] = await Promise.all([
      this.messagesModel.find(filter).sort({ createdAt: -1 }).skip(skip).limit(limit).populate('sender').populate('chatRoom'),
      this.messagesModel.countDocuments(filter),
    ]);

    const room = await this.chatRoomsModel.findOne({ _id: id }).populate('participants').populate('blockedBy').populate('lastMessage');

    return {
      data: { messages, room },
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
    };
  }

  async createChatRoom(body: CreateChatRoomDto) {
    const room = await this.chatRoomsModel.create({ ...body })
    const newRoom = await room.populate('participants')
    return newRoom
  }
}
