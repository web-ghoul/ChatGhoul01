import { Injectable, NestMiddleware } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Message } from '../schemas/message.schema';

@Injectable()
export class CheckIfMessagesBelongToUserMiddleware implements NestMiddleware {
    constructor(@InjectModel(Message.name) private messageModel: Model<Message>) { }

    async use(req: any, res: any, next: () => void) {
        try {
            const user = req.user
            const body = req.body
            const messages = body?.messages
            if (user && body && messages) {
                const foundMessages = await this.messageModel.find({ _id: { $in: messages } });
                const unauthorized = foundMessages.find(
                    (msg) => msg.sender.toString() !== user._id.toString()
                );
                if (unauthorized) {
                    return res.status(403).json({ message: "One or more messages aren't owned by you" });
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
