import {forwardRef, Module} from '@nestjs/common';
import { UsersService } from './users.service';
import {UsersController} from "./users.controller";
import {SequelizeModule} from "@nestjs/sequelize";
import {UserModel} from "./user.model";
import {CategoryModel} from "../categories/category.model";
import {AuthModule} from "../auth/auth.module";

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [
      SequelizeModule.forFeature([UserModel, CategoryModel]),
      forwardRef(() => AuthModule)
  ],
  exports: [
      UsersService,
  ]
})
export class UsersModule {}
