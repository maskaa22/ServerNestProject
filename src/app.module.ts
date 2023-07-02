import { Module } from '@nestjs/common';
import {SequelizeModule} from '@nestjs/sequelize';
import {ConfigModule} from "@nestjs/config";

import { UserModel } from './users/user.model';
import { UsersModule } from './users/users.module';
import {CategoryModel} from "./categories/category.model";
import { CategoriesModule } from './categories/categories.module';
import { AuthModule } from './auth/auth.module';
import { UsersController } from './users/users.controller';
import { CategoriesController } from './categories/categories.controller';
import {AuthController} from "./auth/auth.controller";


@Module({
  controllers: [UsersController, CategoriesController, AuthController],
  providers: [],
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env'
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      models: [UserModel, CategoryModel],
      autoLoadModels: true
    }),
    UsersModule,
    AuthModule,
    CategoriesModule,
  ],
})
export class AppModule {}
