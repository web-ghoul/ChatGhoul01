import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { ObjectId } from 'mongoose';

@Schema({ timestamps: true })
export class Message {
    @Prop({ required: true })
    msg: string;

    @Prop({
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        default: undefined,
    })
    sender: ObjectId;

    @Prop({
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        default: undefined,
    })
    reciever: ObjectId;

    @Prop({ required: true, default: false })
    is_read: boolean;

    @Prop({ required: true, default: false })
    is_send: boolean;
}

export const MessageSchema = SchemaFactory.createForClass(Message);