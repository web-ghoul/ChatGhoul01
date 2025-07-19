import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'schemas/user.schema';
import { handlePaginationQueries } from 'src/utils/pagination';
import { uploadImage } from 'src/utils/upload.util';
import { UpdateUserDto } from './dto/updateUser.dto';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) { }

  async getAllUsers(userId: string, query) {
    const { page, limit, skip } = handlePaginationQueries(query)

    const filter: any = { _id: { $ne: userId } };

    if (query.search) {
      filter.username = { $regex: query.search, $options: 'i' };
    }

    const [users, total] = await Promise.all([
      this.userModel.find(filter).skip(skip).limit(limit),
      this.userModel.countDocuments(filter),
    ]);

    return {
      data: users,
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
    };
  }

  async profile(userId: string) {
    const user = await this.userModel.findOne({ _id: userId })
    return user;
  }

  async updateAvatar(file: Express.Multer.File, userId: string) {
    const avatar = await uploadImage(file, `users/${userId}/avatars`)
    await this.userModel.updateOne({ _id: userId }, { avatar: avatar })
    return avatar;
  }

  async updateChatTheme(file: Express.Multer.File, userId: string) {
    const chat_theme = await uploadImage(file, `users/${userId}/chat_themes`)
    await this.userModel.updateOne({ _id: userId }, { chat_theme: chat_theme })
    return chat_theme;
  }

  async update(body: UpdateUserDto, userId: string) {
    const user = await this.userModel.updateOne({ _id: userId }, { ...body })
    return user;
  }
}
