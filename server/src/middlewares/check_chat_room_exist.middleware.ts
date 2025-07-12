import { Injectable, NestMiddleware } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ChatRoom } from 'schemas/chatRoom.schema';

@Injectable()
export class CheckChatRoomExistMiddleware implements NestMiddleware {
  constructor(@InjectModel(ChatRoom.name) private chatRoomModel: Model<ChatRoom>) { }

  async use(req: any, res: any, next: () => void) {
    try {
      const user = req.user
      const id = req.params.id
      const body = req.body
      if (body && user && id) {
        const room = await this.chatRoomModel.findOne({ participants: [user._id, id].sort() })
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
