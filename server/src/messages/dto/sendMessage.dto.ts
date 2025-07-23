import { Type } from 'class-transformer';
import { IsDate, IsString } from 'class-validator';

export class SendMessageDto {
    @IsString()
    msg: string;

    @Type(() => Date)
    @IsDate()
    createdAt: Date;
}