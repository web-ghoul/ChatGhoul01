import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthorizationMiddleware } from '../middlewares/authorization.middleware';
import { CheckIfMessageBelongToUserMiddleware } from '../middlewares/check-if-message-belong-to-user.middleware';
import { CheckIfMessagesBelongToUserMiddleware } from '../middlewares/check-if-messages-belong-to-user.middleware';
import { CheckMongoIdMiddleware } from '../middlewares/check-mongo-id.middleware';
import { CheckChatRoomExistMiddleware } from '../middlewares/check_chat_room_exist.middleware';
import { ChatRoom, ChatRoomSchema } from '../schemas/chatRoom.schema';
import { Message, MessageSchema } from '../schemas/message.schema';
import { MessagesController } from './messages.controller';
import { MessagesGateway } from './messages.gateway';
import { MessagesService } from './messages.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Message.name, schema: MessageSchema }]),
    MongooseModule.forFeature([{ name: ChatRoom.name, schema: ChatRoomSchema }]),
  ],
  controllers: [MessagesController],
  providers: [MessagesService, MessagesGateway],
})
export class MessagesModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthorizationMiddleware)
      .forRoutes("messages")
      .apply(CheckMongoIdMiddleware)
      .forRoutes(
        { path: 'messages/:id', method: RequestMethod.ALL },
        { path: 'messages/read/:id', method: RequestMethod.ALL },
        { path: 'messages/seen/:id', method: RequestMethod.ALL }
      )
      .apply(CheckChatRoomExistMiddleware)
      .forRoutes({ path: 'messages/:id', method: RequestMethod.POST })
      .apply(CheckIfMessageBelongToUserMiddleware)
      .forRoutes(
        { path: 'messages/:id', method: RequestMethod.PUT },
        { path: 'messages/read/:id', method: RequestMethod.PUT },
        { path: 'messages/seen/:id', method: RequestMethod.PUT }
      )
      .apply(CheckIfMessagesBelongToUserMiddleware)
      .forRoutes({ path: 'messages', method: RequestMethod.DELETE })
  }
}
