import { IsString } from 'class-validator';

export class EditMessageDto {
    @IsString()
    msg: string;
}