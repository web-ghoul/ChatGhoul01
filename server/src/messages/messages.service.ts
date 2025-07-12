import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
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
      chatRoom = await this.chatRoomModel.create({
        participants: [userId, chatterId].sort()
      })
    }
    const message = await this.messageModel.create({
      ...body,
      chatRoom: room ? room._id : chatRoom._id,
      sender: userId
    })
    await this.chatRoomModel.updateOne({
      _id: room ? room._id : chatRoom._id
    }, { lastMessage: message._id })
    return { message, chatRoom: room || chatRoom }
  }

  async editMsg(body: EditMessageDto) {
    return 'This action adds a new message';
  }

  async deleteMsg(body: DeleteMessageDto) {
    return 'This action adds a new message';
  }
}
