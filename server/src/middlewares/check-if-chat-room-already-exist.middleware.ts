import { Injectable, NestMiddleware } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { plainToInstance } from 'class-transformer';
import { Model } from 'mongoose';
import { CreateChatRoomDto } from 'src/chat-rooms/dto/create-chat-room.dto';
import { validationHelper } from 'src/utils/validationHelper';
import { ChatRoom } from '../schemas/chatRoom.schema';

@Injectable()
export class CheckIfChatRoomAlreadyExistMiddleware implements NestMiddleware {
  constructor(@InjectModel(ChatRoom.name) private chatRoomModel: Model<ChatRoom>) { }

  async use(req: any, res: any, next: () => void) {
    try {
      const user = req.user
      const body = req.body
      if (body && body.participants && user) {
        const validatation = plainToInstance(CreateChatRoomDto, body);
        validationHelper(validatation, res)
        const room = await this.chatRoomModel.findOne({ participants: body.participants.sort() }).populate("participants").populate("lastMessage").populate("blockedBy")
        if (room) {
          req.room = room
        } else {
          req.room = undefined
        }
        return next();
      }
      res.status(500).json({
        message: "Server Error"
      })
    } catch (error) {
      console.log(error)
      res.status(500).json({
        message: "Server Error"
      })
    }
  }
}
