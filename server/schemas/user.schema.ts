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

    @Prop({ default: '' })
    avatar: string;

    @Prop({ default: '' })
    chat_theme: string;

    @Prop({ default: '' })
    about: string;

    @Prop({ default: false })
    online: boolean;

    @Prop({ default: new Date() })
    last_seen: Date;

    @Prop({ enum: ['completed', "undefined"], default: "undefined" })
    tour_status: string

    @Prop({ required: true })
    password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);