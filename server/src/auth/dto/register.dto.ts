import {
    IsEmail,
    IsIn,
    IsString,
    Length,
    Matches,
    MaxLength,
    MinLength,
} from 'class-validator';
import { LoginDto } from './login.dto';

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
    @Length(11)
    phone: string;

    @IsString()
    @MinLength(8)
    @Matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        {
            message:
                'Confirm Password must be include at least one uppercase letter, one lowercase letter, one number, and one special character.',
        },
    )
    password: string;

    @IsString()
    @MinLength(8)
    @Matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        {
            message:
                'Confirm Password must be include at least one uppercase letter, one lowercase letter, one number, and one special character.',
        },
    )
    confirmPassword: string;
}