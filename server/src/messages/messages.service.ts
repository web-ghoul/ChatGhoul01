import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model } from 'mongoose';
import { ChatRoom } from 'schemas/chatRoom.schema';
import { Message } from 'schemas/message.schema';
import { DeleteMessageDto } from './dto/deleteMessages.dto';
import { EditMessageDto } from './dto/editMessage.dto';
import { SendMessageDto } from './dto/sendMessage.dto';

@Injectable()
export class MessagesService {
  constructor(@InjectModel(Message.name) private messageModel: Model<Message>, @InjectModel(ChatRoom.name) private chatRoomModel: Model<ChatRoom>) { }

  async sendMsg(body: SendMessageDto, userId: string, chatterId: string, room?: ChatRoom) {
    let chatRoom;
    if (!room) {
      const sortedParticipants = [userId.toString(), chatterId.toString()]
        .sort()
        .map(id => new mongoose.Types.ObjectId(id));
      chatRoom = await this.chatRoomModel.create({
        participants: sortedParticipants
      })
    }
    const newMessage = await this.messageModel.create({
      ...body,
      chatRoom: room ? room._id : chatRoom._id,
      sender: userId
    })
    await this.chatRoomModel.updateOne({
      _id: room ? room._id : chatRoom._id
    }, { lastMessage: newMessage._id })
    const message = await newMessage.populate("sender")
    return { message, chatRoom: room || chatRoom }
  }

  async editMsg(body: EditMessageDto, msgId: string) {
    const message = await this.messageModel.updateOne({ _id: msgId }, { ...body })
    return message;
  }

  async deleteMsg(body: DeleteMessageDto) {
    await Promise.all(
      body.messages.map((msgId) =>
        this.messageModel.updateOne(
          { _id: msgId },
          { $set: { deletedAt: new Date() } }
        )
      )
    );
  }
}
