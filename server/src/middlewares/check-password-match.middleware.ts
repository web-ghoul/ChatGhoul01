import { Injectable, NestMiddleware } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as bcrypt from "bcryptjs"
import { Response } from 'express';
import { Model } from 'mongoose';
import { User } from 'schemas/user.schema';

@Injectable()
export class CheckPasswordMatchMiddleware implements NestMiddleware {
  constructor(@InjectModel(User.name) private userModel: Model<User>) { }

  async use(req: any, res: Response, next: () => void) {
    try {
      const body = req.body
      if (body && body.password && body.emailOrUsername && req.user) {
        const password = req.body.password
        const user = req.user
        const match = bcrypt.compareSync(password, user.password)
        if (!match) {
          return res.status(400).json({
            message: "Invalid Credential"
          })
        }
        next();
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
