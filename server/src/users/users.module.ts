import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from 'schemas/user.schema';
import { AuthorizationMiddleware } from 'src/middlewares/authorization.middleware';

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
  }
}
