import { Injectable, NestMiddleware } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Request, Response } from 'express';
import { Model } from 'mongoose';
import { User } from 'schemas/user.schema';
import { verifyToken } from 'src/utils/auth';

@Injectable()
export class AuthorizationMiddleware implements NestMiddleware {
  constructor(@InjectModel(User.name) private userModel: Model<User>) { }

  async use(req, res: Response, next: () => void) {
    try {
      const token = req?.headers?.authorization?.split(" ")?.[1]
      console.log(token)
      if (token) {
        req.user = verifyToken(token)
        return next();
      }
      return res.status(403).json({
        message: "UnAuthorized"
      })
    } catch (error) {
      console.log(error)
      return res.status(403).json({
        message: "UnAuthorized"
      })
    }
  }
}
