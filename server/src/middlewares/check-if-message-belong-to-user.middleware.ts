import { Injectable, NestMiddleware } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Message } from 'src/schemas/message.schema';

@Injectable()
export class CheckIfMessageBelongToUserMiddleware implements NestMiddleware {
  constructor(@InjectModel(Message.name) private messageModel: Model<Message>) { }

  async use(req: any, res: any, next: () => void) {
    try {
      const user = req.user
      const userId = req.user._id
      const id = req.params.id
      if (user && id && userId) {
        const message = await this.messageModel.findById(id)
        if (message.sender.toString() !== userId.toString()) {
          return res.status(403).json({
            message: "Message isn't owned by you"
          })
        }
        return next();
      }
    } catch (error) {
      console.log(error)
      return res.status(500).json({
        message: "Server Error"
      })
    }
  }
}
