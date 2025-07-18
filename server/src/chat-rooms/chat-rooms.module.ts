import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ChatRoom, ChatRoomSchema } from 'schemas/chatRoom.schema';
import { Message, MessageSchema } from 'schemas/message.schema';
import { AuthorizationMiddleware } from 'src/middlewares/authorization.middleware';
import { CheckMongoIdMiddleware } from 'src/middlewares/check-mongo-id.middleware';
import { ChatRoomsController } from './chat-rooms.controller';
import { ChatRoomsService } from './chat-rooms.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: ChatRoom.name, schema: ChatRoomSchema }]),
    MongooseModule.forFeature([{ name: Message.name, schema: MessageSchema }]),
  ],
  controllers: [ChatRoomsController],
  providers: [ChatRoomsService],
})
export class ChatRoomsModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthorizationMiddleware)
      .forRoutes("chat-rooms")
      .apply(CheckMongoIdMiddleware)
      .forRoutes({ path: 'chat-rooms/:id', method: RequestMethod.ALL })
  }
}
