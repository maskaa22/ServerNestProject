import {forwardRef, Module} from '@nestjs/common';
import {TypeOrmModule} from "@nestjs/typeorm";

import {AuthModule} from "../auth/auth.module";
import {CategoriesModule} from "../categories/categories.module";
import {Category} from "../categories/category.entity";
import {Task} from "./task.entity";
import {TasksController} from './tasks.controller';
import {TasksService} from './tasks.service';

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
export class TasksModule {
}
