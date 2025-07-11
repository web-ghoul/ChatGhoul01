import { Injectable } from '@nestjs/common';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { ForgotPasswordDto } from './dto/forgotPassword.dto';
import { ResetPasswordDto } from './dto/resetPassword.dto';
import { User } from 'schemas/user.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import * as bcrypt from 'bcryptjs'

@Injectable()
export class AuthService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) { }

  async register(body: RegisterDto) {
    const password = bcrypt.hashSync(body.password, 10)
    const user = await this.userModel.create({ ...body, password })
    return user
  }

  async forgotPassword(body: ForgotPasswordDto) {
    const user = await this.userModel.findOne({ email: body.email })
    return user
  }

  async resetPassword(body: ResetPasswordDto) {
    const user = await this.userModel.findOne({ email: body.email })
    return user
  }
}
