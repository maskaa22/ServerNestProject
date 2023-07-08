import {forwardRef, Module} from '@nestjs/common';
import { CategoriesService } from './categories.service';
import {CategoriesController} from "./categories.controller";
import {AuthModule} from "../auth/auth.module";
import {TypeOrmModule} from "@nestjs/typeorm";
import {User} from "../users/user.entity";
import { Category } from './category.entity';
import {Task} from "../tasks/task.entity";

@Module({
  controllers: [CategoriesController],
  providers: [CategoriesService],
  imports: [
    TypeOrmModule.forFeature([Category, User, Task]),
    //SequelizeModule.forFeature([CategoryModel, UserModel]),
    forwardRef(() => AuthModule)
  ],
  exports: [
      CategoriesService,
  ]
})
export class CategoriesModule {}
