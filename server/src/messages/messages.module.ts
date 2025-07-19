import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ChatRoom, ChatRoomSchema } from 'schemas/chatRoom.schema';
import { Message, MessageSchema } from 'schemas/message.schema';
import { AuthorizationMiddleware } from 'src/middlewares/authorization.middleware';
import { CheckIfMessageBelongToUserMiddleware } from 'src/middlewares/check-if-message-belong-to-user.middleware';
import { CheckIfMessagesBelongToUserMiddleware } from 'src/middlewares/check-if-messages-belong-to-user.middleware';
import { CheckMongoIdMiddleware } from 'src/middlewares/check-mongo-id.middleware';
import { CheckChatRoomExistMiddleware } from 'src/middlewares/check_chat_room_exist.middleware';
import { MessagesController } from './messages.controller';
import { MessagesService } from './messages.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Message.name, schema: MessageSchema }]),
    MongooseModule.forFeature([{ name: ChatRoom.name, schema: ChatRoomSchema }]),
  ],
  controllers: [MessagesController],
  providers: [MessagesService],
})
export class MessagesModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthorizationMiddleware)
      .forRoutes("messages")
      .apply(CheckMongoIdMiddleware)
      .forRoutes({ path: 'messages/:id', method: RequestMethod.ALL })
      .apply(CheckChatRoomExistMiddleware)
      .forRoutes({ path: 'messages/:id', method: RequestMethod.POST })
      .apply(CheckIfMessageBelongToUserMiddleware)
      .forRoutes({ path: 'messages/:id', method: RequestMethod.PUT })
      .apply(CheckIfMessagesBelongToUserMiddleware)
      .forRoutes({ path: 'messages', method: RequestMethod.DELETE })
  }
}
