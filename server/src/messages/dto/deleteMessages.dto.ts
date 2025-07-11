import { IsArray, IsString } from 'class-validator';

export class DeleteMessageDto {
  @IsArray()
  @IsString({ each: true })
  messages: string[];
}