import {ConfigModule, ConfigService} from "@nestjs/config";
import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';

import {AuthController} from "./auth/auth.controller";
import {AuthModule} from './auth/auth.module';
import {CategoriesController} from "./categories/categories.controller";
import {CategoriesModule} from "./categories/categories.module";
import {UsersModule} from './users/users.module';
import {Category} from "./categories/category.entity";
import {Task} from "./tasks/task.entity";
import {TasksModule} from './tasks/tasks.module';
import {TasksController} from "./tasks/tasks.controller";
import {User} from "./users/user.entity";
import {UsersController} from './users/users.controller';

@Module({
    controllers: [
        UsersController,
        CategoriesController,
        AuthController,
        TasksController
    ],
    providers: [],
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            envFilePath: '.env'
        }),
        TypeOrmModule.forRootAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: (configService: ConfigService) => ({
                type: 'postgres',
                host: configService.get('POSTGRES_HOST'),
                port: configService.get('POSTGRES_PORT'),
                username: configService.get('POSTGRES_USER'),
                password: configService.get('POSTGRES_PASSWORD'),
                database: configService.get('POSTGRES_DB'),
                synchronize: true,
                entities: [User, Category, Task]
            })
        }),
        UsersModule,
        AuthModule,
        CategoriesModule,
        TasksModule,
    ],
})
export class AppModule {
}
