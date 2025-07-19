import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { ObjectId } from "mongoose";

@Schema({ timestamps: true })
export class ChatRoom {
    _id: ObjectId;

    @Prop({ type: [mongoose.Schema.Types.ObjectId], ref: 'User', required: true })
    participants: mongoose.Types.ObjectId[];

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Message' })
    lastMessage: mongoose.Types.ObjectId;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
    blockedBy: mongoose.Types.ObjectId;
}

export const ChatRoomSchema = SchemaFactory.createForClass(ChatRoom);
