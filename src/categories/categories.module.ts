import { Module } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import {CategoriesController} from "./categories.controller";
import {SequelizeModule} from "@nestjs/sequelize";
import {UserModel} from "../users/user.model";
import {CategoryModel} from "./category.model";

@Module({
  controllers: [CategoriesController],
  providers: [CategoriesService],
  imports: [
    SequelizeModule.forFeature([CategoryModel, UserModel])
  ],
  exports: [
      CategoriesService
  ]
})
export class CategoriesModule {}
