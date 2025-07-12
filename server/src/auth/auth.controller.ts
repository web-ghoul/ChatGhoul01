import { Body, Controller, Post, Req, Res, UnauthorizedException } from '@nestjs/common';
import { signToken } from 'src/utils/auth';
import { AuthService } from './auth.service';
import { ForgotPasswordDto } from './dto/forgotPassword.dto';
import { RegisterDto } from './dto/register.dto';
import { ResetPasswordDto } from './dto/resetPassword.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Post('register')
  async register(@Body() body: RegisterDto, @Res() res) {
    try {
      const user = await this.authService.register({ ...body, email: body.email.toLowerCase() });
      console.log(user)
      const token = signToken({ _id: user._id, email: user.email, username: user.username });
      return res.status(200).json({
        token,
        data: user,
        message: "User is created successfully"
      })
    } catch (error) {
      console.log(error)
      return res.status(500).json({
        message: "Server Error"
      })
    }
  }

  @Post('login')
  async login(@Req() req) {
    const user = req.user;
    if (!user) {
      throw new UnauthorizedException("Invalid credentials");
    }
    const token = signToken({ _id: user._id, email: user.email, username: user.username, phone: user.phone });
    return {
      message: "Login successfully",
      token,
      data: user
    };
  }

  @Post('forgot_password')
  async forgotPassword(@Body() body: ForgotPasswordDto, @Res() res) {
    try {
      await this.authService.forgotPassword({ ...body, email: body.email.toLowerCase() });
      return res.status(200).json({
        message: "Check your inbox"
      })
    } catch (error) {
      console.log(error)
      return res.status(500).json({
        message: "Server Error"
      })
    }
  }

  @Post('reset_password')
  async resetPassword(@Body() body: ResetPasswordDto, @Res() res) {
    try {
      await this.authService.resetPassword({ ...body, email: body.email.toLowerCase() });
      return res.status(200).json({
        message: "Your Password is updated successfully"
      })
    } catch (error) {
      console.log(error)
      return res.status(500).json({
        message: "Server Error"
      })
    }
  }
}
