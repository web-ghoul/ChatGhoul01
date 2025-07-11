import { IsString } from 'class-validator';

export class UpdateChatThemeDto {
    @IsString()
    chat_theme: string;
}