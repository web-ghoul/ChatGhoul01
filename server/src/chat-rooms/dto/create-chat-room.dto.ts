import { ArrayMaxSize, ArrayMinSize, IsArray, IsMongoId, IsOptional } from "class-validator";

export class CreateChatRoomDto {
    @IsArray()
    @IsMongoId({ each: true })
    @ArrayMinSize(2)
    @ArrayMaxSize(2)
    participants: string[];

    @IsOptional()
    @IsMongoId()
    lastMessage?: string;
}
