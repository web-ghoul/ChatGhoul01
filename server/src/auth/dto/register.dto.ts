import {
    IsEmail,
    IsIn,
    IsString,
    Matches,
    MaxLength,
    MinLength,
} from 'class-validator';
import { Match } from '../../validators/match.decorator';

export class RegisterDto {
    @IsEmail()
    email: string;

    @IsString()
    @MaxLength(10)
    username: string;

    @IsString()
    @IsIn(["male", "female"])
    gender: string;

    @IsString()
    @Matches(/^01[0-9]{9}$/, {
        message: 'Phone number must be 11 digits and start with 01',
    })
    phone: string;

    @IsString()
    @MinLength(8)
    @Matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        {
            message:
                'Password must be include at least one uppercase letter, one lowercase letter, one number, and one special character.',
        },
    )
    password: string;

    @IsString()
    @MinLength(8)
    @Match('password', { message: 'Confirm password does not match password' })
    confirmPassword: string;
}