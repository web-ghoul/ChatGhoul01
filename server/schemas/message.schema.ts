import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';

@Schema({ timestamps: true })
export class Message {
    @Prop({ required: true })
    msg: string;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'ChatRoom', required: true })
    chatRoom: mongoose.Types.ObjectId;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true })
    sender: mongoose.Types.ObjectId;

    @Prop({ required: true, default: false })
    is_read: boolean;

    @Prop({ required: true, default: false })
    is_send: boolean;

    @Prop({ required: true, default: false })
    is_save: boolean;

    @Prop({ type: Date, default: null })
    deletedAt: Date | null;
}

export const MessageSchema = SchemaFactory.createForClass(Message);
