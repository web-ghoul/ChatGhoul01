import { Controller, Post, Body, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { ForgotPasswordDto } from './dto/forgotPassword.dto';
import { ResetPasswordDto } from './dto/resetPassword.dto';
import { signToken } from 'src/utils/auth';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Post('register')
  async register(@Body() body: RegisterDto, @Res() res) {
    try {
      await this.authService.register(body);
      return res.status(200).json({
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
  async login(@Body() body: LoginDto, @Res() res) {
    try {
      const user = await this.authService.login(body);
      if (!user) {
        return res.status(404).json({
          message: "Invalid Credential"
        })
      }
      const token = signToken({ _id: user._id, email: user.email, username: user.username });
      return res.status(200).json({
        message: "Login successfully",
        token
      })
    } catch (error) {
      console.log(error)
      return res.status(500).json({
        message: "Server Error"
      })
    }
  }

  @Post('forgot_password')
  async forgotPassword(@Body() body: ForgotPasswordDto, @Res() res) {
    try {
      await this.authService.forgotPassword(body);
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
      await this.authService.resetPassword(body);
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
