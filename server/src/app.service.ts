import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ChatRoom } from './schemas/chatRoom.schema';
import { Message } from './schemas/message.schema';
import { User } from './schemas/user.schema';

@Injectable()
export class AppService {
  constructor(
    @InjectModel(User.name) private userModel: Model<User>,
    @InjectModel(Message.name) private messageModel: Model<Message>,
    @InjectModel(ChatRoom.name) private chatRoomModel: Model<ChatRoom>
  ) { }

  welcome() {
    const treasureMap = {
      message: '🗺️ Welcome to the ChatGhoul API! 🏴‍☠️',
      clues: [
        "🌴 Follow the path of 'api/' to start the journey.",
        "🦜 Look out for the 'X marks the spot' at each endpoint!",
      ],
      disclaimer: 'Remember, only true adventurers can unlock the secrets...',
    };
    return treasureMap;
  }

  async getAllData(userId: string) {
    console.log(22222)
    const users = await this.userModel.find({ _id: { $ne: userId } })
    console.log(users)
    const rooms = await this.chatRoomModel.find({ participants: userId }).populate("lastMessage").populate("participants")
    console.log(rooms)
    let messages = {}
    for (let i = 0; i < rooms.length; i++) {
      const room = rooms[i]
      const msgs = await this.messageModel.find({ chatRoom: room._id }).populate("chatRoom").populate("sender")
      messages = { ...messages, [`${room._id}`]: msgs }
      console.log(messages)
    }
    return { users, rooms, messages }
  }
}
