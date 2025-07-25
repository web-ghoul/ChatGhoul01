import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ timestamps: true })
export class Avatar {
    @Prop({ required: true })
    url: string;

    @Prop({ required: true, default: '' })
    name: string;

    @Prop({ required: true, enum: ['male', "female"] })
    gender: string;
}

export const AvatarSchema = SchemaFactory.createForClass(Avatar);