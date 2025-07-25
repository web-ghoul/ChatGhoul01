import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ChatTheme } from 'src/schemas/chattheme.schema';
import { uploadImage } from 'src/utils/upload.util';

@Injectable()
export class ChatThemesService {
  constructor(@InjectModel(ChatTheme.name) private chatThemesModel: Model<ChatTheme>) { }

  async uploadChatThemes(files: Express.Multer.File[]) {
    files.map(async (file) => {
      const chatTheme = await uploadImage(file, `chat_themes`)
      await this.chatThemesModel.create({ url: chatTheme, name: file.originalname })
    })
  }

  async getAllChatThemes(query) {
    const page = Number(query.page) || 1;
    const limit = Number(query.limit) || 10;
    const skip = (page - 1) * limit;

    const [chatThemes, total] = await Promise.all([
      this.chatThemesModel.find().skip(skip).limit(limit),
      this.chatThemesModel.countDocuments(),
    ]);

    return {
      data: chatThemes,
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
    };
  }
}
