import { Injectable, NestMiddleware } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { plainToInstance } from 'class-transformer';
import { Response } from 'express';
import { Model } from 'mongoose';
import { RegisterDto } from 'src/auth/dto/register.dto';
import { User } from 'src/schemas/user.schema';
import { validationHelper } from 'src/utils/validationHelper';

@Injectable()
export class CheckIfUserAlreadyExistMiddleware implements NestMiddleware {
  constructor(@InjectModel(User.name) private userModel: Model<User>) { }

  async use(req: any, res: Response, next: () => void) {
    try {
      const body = req.body
      if (body && body.email && body.username && body.phone) {
        const validatation = plainToInstance(RegisterDto, body);
        validationHelper(validatation, res)
        const user = await this.userModel.findOne({
          $or: [
            { email: body.email.toLowerCase() },
            { username: body.username },
            { phone: body.phone },
          ],
        });
        if (user) {
          if (user.username === body.username) {
            return res.status(400).json({
              message: "Username is token"
            })
          }
          return res.status(400).json({
            message: "Email or Phone Number is already exist"
          })
        }
        return next();
      } else {
        return res.status(500).json({
          message: "Server Error"
        })
      }
    } catch (error) {
      console.log(error)
      return res.status(500).json({
        message: "Server Error"
      })
    }
  }
}
