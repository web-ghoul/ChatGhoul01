import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ChatTheme, ChatThemeSchema } from 'src/schemas/chattheme.schema';
import { ChatThemesController } from './chatThemes.controller';
import { ChatThemesService } from './chatThemes.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: ChatTheme.name, schema: ChatThemeSchema }]),
  ],
  controllers: [ChatThemesController],
  providers: [ChatThemesService],
})
export class ChatThemesModule { }
