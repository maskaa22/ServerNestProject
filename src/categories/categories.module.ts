import {forwardRef, Module} from '@nestjs/common';
import {TypeOrmModule} from "@nestjs/typeorm";

import {AuthModule} from "../auth/auth.module";
import {CategoriesController} from "./categories.controller";
import {CategoriesService} from './categories.service';
import {Category} from './category.entity';
import {Task} from "../tasks/task.entity";
import {User} from "../users/user.entity";

@Module({
    controllers: [CategoriesController],
    providers: [CategoriesService],
    imports: [
        TypeOrmModule.forFeature([Category, User, Task]),
        forwardRef(() => AuthModule)
    ],
    exports: [
        CategoriesService,
    ]
})
export class CategoriesModule {
}
