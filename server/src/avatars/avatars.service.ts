import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Avatar } from '../schemas/avatar.schema';
import { handlePaginationQueries } from '../utils/pagination';
import { uploadImage } from '../utils/upload.util';
import { UploadAvatarsDto } from './dto/UploadAvatars.dto';

@Injectable()
export class AvatarsService {
  constructor(@InjectModel(Avatar.name) private avatarModel: Model<Avatar>) { }

  async uploadAvatars(body: UploadAvatarsDto, files: Express.Multer.File[]) {
    files.map(async (file) => {
      const avatar = await uploadImage(file, `avatars`)
      await this.avatarModel.create({ url: avatar, name: file.originalname, gender: body.gender })
    })
  }

  async getAllAvatars(query) {
    const { gender } = query;
    const { page, limit, skip } = handlePaginationQueries(query)

    const filter: any = {};
    if (gender) filter.gender = gender;

    const [avatars, total] = await Promise.all([
      this.avatarModel.find(filter).skip(skip).limit(limit),
      this.avatarModel.countDocuments(filter),
    ]);

    return {
      data: avatars,
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
    };
  }
}
