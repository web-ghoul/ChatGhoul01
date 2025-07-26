import { IsIn, IsString } from "class-validator";

export class UploadAvatarsDto {
    avatars: Express.Multer.File[];

    @IsString()
    @IsIn(["male", "female"])
    gender: string;
}