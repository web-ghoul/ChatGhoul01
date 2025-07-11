import { IsString } from 'class-validator';

export class SendMessageDto {
    @IsString()
    msg: string;
}