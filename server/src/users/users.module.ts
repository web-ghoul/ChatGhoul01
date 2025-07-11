import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from 'schemas/user.schema';
import { AuthorizationMiddleware } from 'src/middlewares/authorization.middleware';
import { CheckIfUserUpdateUniqueInfoMiddleware } from 'src/middlewares/check_if_user_update_unique_info.middleware';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthorizationMiddleware)
      .forRoutes("users")
      .apply(CheckIfUserUpdateUniqueInfoMiddleware)
      .forRoutes({ path: 'users', method: RequestMethod.PUT })
  }
}
