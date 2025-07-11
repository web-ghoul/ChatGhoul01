import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as bcrypt from 'bcryptjs';
import { Model } from 'mongoose';
import { User } from 'schemas/user.schema';
import { ForgotPasswordDto } from './dto/forgotPassword.dto';
import { RegisterDto } from './dto/register.dto';
import { ResetPasswordDto } from './dto/resetPassword.dto';

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
