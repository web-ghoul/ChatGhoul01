import { Injectable, NestMiddleware } from '@nestjs/common';
import { Response } from 'express';
import { verifyToken } from '../utils/auth';

@Injectable()
export class AuthorizationMiddleware implements NestMiddleware {
  async use(req, res: Response, next: () => void) {
    try {
      const token = req?.headers?.authorization?.split(" ")?.[1]
      if (token) {
        req.user = verifyToken(token)
        return next();
      }
      return res.status(401).json({
        message: "UnAuthorized"
      })
    } catch (error) {
      console.log(error)
      return res.status(401).json({
        message: "UnAuthorized"
      })
    }
  }
}
