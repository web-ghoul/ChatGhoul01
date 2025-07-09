import { Injectable, NestMiddleware } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Request, Response } from 'express';
import { Model } from 'mongoose';
import { User } from 'schemas/user.schema';

@Injectable()
export class AuthorizationMiddleware implements NestMiddleware {
  constructor(@InjectModel(User.name) private userModel: Model<User>) { }

  async use(req: Request, res: Response, next: () => void) {
    try {
      const auth = req.headers.authorization
      if(auth){
      }
      next();
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
