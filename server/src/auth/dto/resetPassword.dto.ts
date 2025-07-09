import { IsEmail, IsString, Matches, MinLength } from 'class-validator';

export class ResetPasswordDto {
    @IsEmail()
    email: string;

    @IsString()
    @MinLength(8)
    @Matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        {
            message:
                'New Password must include at least one uppercase letter, one lowercase letter, one number, and one special character.',
        },
    )
    newPassword: string;

    @IsString()
    @MinLength(8)
    @Matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        {
            message:
                'Confirm New Password must be include at least one uppercase letter, one lowercase letter, one number, and one special character.',
        },
    )
    confirmNewPassword: string;
}