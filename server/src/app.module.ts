import { MiddlewareConsumer, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ThrottlerModule } from '@nestjs/throttler';
import * as dotenv from "dotenv";
import { ChatRoom, ChatRoomSchema } from 'src/schemas/chatRoom.schema';
import { Message, MessageSchema } from 'src/schemas/message.schema';
import { User, UserSchema } from 'src/schemas/user.schema';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { AvatarsModule } from './avatars/avatars.module';
import { ChatRoomsModule } from './chat-rooms/chat-rooms.module';
import { ChatThemesModule } from './chatThemes/chatThemes.module';
import { MessagesModule } from './messages/messages.module';
import { AuthorizationMiddleware } from './middlewares/authorization.middleware';
import { UsersModule } from './users/users.module';

dotenv.config();

@Module({
  imports: [
    ThrottlerModule.forRoot([
      {
        ttl: 60000,
        limit: 10,
      },
    ]),
    MongooseModule.forRoot(`${process.env.DB || ''}`),
    UsersModule,
    MessagesModule,
    AuthModule,
    AvatarsModule,
    ChatThemesModule,
    ChatRoomsModule,
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    MongooseModule.forFeature([{ name: Message.name, schema: MessageSchema }]),
    MongooseModule.forFeature([{ name: ChatRoom.name, schema: ChatRoomSchema }]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthorizationMiddleware)
      .forRoutes("/all")
  }
}
