import {forwardRef, Module} from '@nestjs/common';
import { UsersService } from './users.service';
import {UsersController} from "./users.controller";

import {AuthModule} from "../auth/auth.module";
import {TypeOrmModule} from "@nestjs/typeorm";
import {User} from "./user.entity";

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [
      TypeOrmModule.forFeature([User]),
      //SequelizeModule.forFeature([UserModel, CategoryModel]),
      forwardRef(() => AuthModule)
  ],
  exports: [
      UsersService,
  ]
})
export class UsersModule {}
