import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthorizationMiddleware } from '../middlewares/authorization.middleware';
import { CheckMongoIdMiddleware } from '../middlewares/check-mongo-id.middleware';
import { CheckIfUserUpdateUniqueInfoMiddleware } from '../middlewares/check_if_user_update_unique_info.middleware';
import { User, UserSchema } from '../schemas/user.schema';
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
      .apply(CheckMongoIdMiddleware)
      .forRoutes({ path: 'users/:id', method: RequestMethod.ALL })
      .apply(CheckIfUserUpdateUniqueInfoMiddleware)
      .forRoutes({ path: 'users', method: RequestMethod.PUT })
  }
}
