import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CheckPasswordMatchMiddleware } from 'src/middlewares/check-password-match.middleware';
import { CheckEmailOrUsernameOrPhoneMiddleware } from 'src/middlewares/check_email_or_username_or_phone.middleware';
import { CheckIfUserAlreadyExistMiddleware } from 'src/middlewares/check_if_user_already_exist.middleware';
import { User, UserSchema } from 'src/schemas/user.schema';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(CheckIfUserAlreadyExistMiddleware)
      .forRoutes(
        { path: 'auth/register', method: RequestMethod.POST },
      )
      .apply(CheckEmailOrUsernameOrPhoneMiddleware)
      .forRoutes(
        { path: 'auth/login', method: RequestMethod.POST },
      )
      .apply(CheckPasswordMatchMiddleware)
      .forRoutes(
        { path: 'auth/login', method: RequestMethod.POST },
      )
  }
}
