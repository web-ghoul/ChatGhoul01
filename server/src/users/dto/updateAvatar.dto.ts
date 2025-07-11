import { IsString } from 'class-validator';

export class UpdateAvatarDto {
    avatar: Express.Multer.File;
}