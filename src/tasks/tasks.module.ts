import {forwardRef, Module} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TasksController } from './tasks.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Task} from "./task.entity";
import {AuthModule} from "../auth/auth.module";
import {CategoriesModule} from "../categories/categories.module";
import {Category} from "../categories/category.entity";


@Module({
  providers: [TasksService],
  controllers: [TasksController],
  imports: [
    TypeOrmModule.forFeature([Task, Category]),
    forwardRef(() => AuthModule),
    forwardRef(() => CategoriesModule)
  ],
  exports: [
      TasksService
  ]
})
export class TasksModule {}
