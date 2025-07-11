import { Injectable, NestMiddleware } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Response } from 'express';
import { Model } from 'mongoose';
import { User } from 'schemas/user.schema';

@Injectable()
export class CheckIfUserUpdateUniqueInfoMiddleware implements NestMiddleware {
    constructor(@InjectModel(User.name) private userModel: Model<User>) { }

    async use(req: any, res: Response, next: () => void) {
        try {
            const body = req.body
            if (body) {
                if (!(body.username || body.email || body.phone)) {
                    return next()
                }
                const userId = req.user?._id;
                if (!userId) {
                    return res.status(401).json({ message: "UnAuthorized" });
                }
                const user = await this.userModel.findOne({
                    $or: [
                        { email: body.email.toLowerCase() },
                        { username: body.username },
                        { phone: body.phone },
                    ],
                    _id: { $ne: userId },
                });
                console.log(user, body.email.toLowerCase())
                if (user) {
                    if (user.username === body.username) {
                        return res.status(400).json({
                            message: "Username is token"
                        })
                    }
                    if (user.email === body.email.toLowerCase()) {
                        return res.status(400).json({
                            message: "Email is already exist"
                        })
                    }
                    if (user.phone === body.phone) {
                        return res.status(400).json({
                            message: "Phone Number is already exist"
                        })
                    }
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
