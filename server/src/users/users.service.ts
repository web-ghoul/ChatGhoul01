import { Injectable } from '@nestjs/common';
import { UpdateUserDto } from './dto/updateUser.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from 'schemas/user.schema';
import { Model } from 'mongoose';
import { uploadImage } from 'src/utils/upload.util';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async profile(userId: string) {
    const user = await this.userModel.findOne({ _id: userId })
    return user;
  }

  async updateAvatar(file: Express.Multer.File, userId: string) {
    const avatar = await uploadImage(file, `users/${userId}/avatars`)
    const user = await this.userModel.updateOne({ _id: userId }, { avatar: avatar })
    return user;
  }

  async updateChatTheme(file: Express.Multer.File, userId: string) {
    const chat_theme = await uploadImage(file, `users/${userId}/chat_themes`)
    const user = await this.userModel.updateOne({ _id: userId }, { chat_theme: chat_theme })
    return user;
  }

  async update(body: UpdateUserDto, userId: string) {
    const user = await this.userModel.updateOne({ _id: userId }, { ...body })
    return user;
  }
}
