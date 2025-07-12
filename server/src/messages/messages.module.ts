import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ChatRoom, ChatRoomSchema } from 'schemas/chatRoom.schema';
import { Message, MessageSchema } from 'schemas/message.schema';
import { AuthorizationMiddleware } from 'src/middlewares/authorization.middleware';
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
      .apply(CheckChatRoomExistMiddleware)
      .forRoutes({ path: 'messages/:id', method: RequestMethod.POST })
  }
}
