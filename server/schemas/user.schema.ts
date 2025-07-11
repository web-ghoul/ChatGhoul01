import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ timestamps: true })
export class User {
    @Prop({ required: true })
    username: string;

    @Prop({ required: true })
    email: string;

    @Prop({ required: true, enum: ['male', "female"] })
    gender: string;

    @Prop({ required: true })
    phone: string;

    @Prop({ required: true, default: '' })
    avatar: string;

    @Prop({ required: true, default: '' })
    chat_theme: string;

    @Prop({ required: true, default: '' })
    about: string;

    @Prop({ required: true })
    password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);