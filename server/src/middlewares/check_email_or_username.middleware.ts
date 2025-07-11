import { Injectable, NestMiddleware } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { plainToInstance } from 'class-transformer';
import { Response } from 'express';
import { Model } from 'mongoose';
import { User } from 'schemas/user.schema';
import { LoginDto } from 'src/auth/dto/login.dto';
import { validationHelper } from 'src/utils/validationHelper';

@Injectable()
export class CheckEmailOrUsernameMiddleware implements NestMiddleware {
  constructor(@InjectModel(User.name) private userModel: Model<User>) { }

  async use(req: any, res: Response, next: () => void) {
    try {
      const body = req.body
      if (body && body.emailOrUsername) {
        const validatation = plainToInstance(LoginDto, body);
        validationHelper(validatation, res)
        const emailOrUsername = body.emailOrUsername
        const user = await this.userModel.findOne({
          $or: [
            { email: emailOrUsername },
            { username: emailOrUsername },
          ],
        });
        if (!user) {
          return res.status(404).json({
            message: "Invalid Credential"
          })
        }
        req.user = user
        return next();
      }
      return res.status(500).json({
        message: "Server Error"
      })
    } catch (error) {
      console.log(error)
      return res.status(500).json({
        message: "Server Error"
      })
    }
  }
}
