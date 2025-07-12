import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ThrottlerModule } from '@nestjs/throttler';
import * as dotenv from "dotenv";
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { AvatarsModule } from './avatars/avatars.module';
import { ChatThemesModule } from './chatThemes/chatThemes.module';
import { MessagesModule } from './messages/messages.module';
import { UsersModule } from './users/users.module';
import { ChatRoomsModule } from './chat-rooms/chat-rooms.module';

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
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
