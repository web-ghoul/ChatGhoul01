import { IsString, Matches, MaxLength, MinLength } from 'class-validator';

export class LoginDto {
  @IsString()
  emailOrUsername: string;

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
}