import { IsEmail, IsIn, IsOptional, IsString, Matches, MaxLength } from "class-validator";

export class UpdateUserDto {
    @IsOptional()
    @MaxLength(10)
    username?: string;

    @IsOptional()
    @IsEmail()
    email?: string;

    @IsOptional()
    @IsIn(['male', 'female'])
    gender?: string;

    @IsOptional()
    @IsString()
    @Matches(/^01[0-9]{9}$/, {
        message: 'Phone number must be 11 digits and start with 01',
    })
    phone?: string;

    @IsOptional()
    @IsString()
    about?: string;

    @IsOptional()
    @IsString()
    avatar?: string;

    @IsOptional()
    @IsString()
    chat_theme?: string;

    @IsOptional()
    @IsString()
    @IsIn(['completed', 'undefined'])
    tour_status?: string;
}
