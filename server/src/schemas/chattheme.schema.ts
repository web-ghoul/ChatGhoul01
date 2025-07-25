import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ timestamps: true })
export class ChatTheme {
    @Prop({ required: true })
    url: string;

    @Prop({ required: true, default: '' })
    name: string;
}

export const ChatThemeSchema = SchemaFactory.createForClass(ChatTheme);