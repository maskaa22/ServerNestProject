import {Body, Controller, Get, Post} from '@nestjs/common';
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {CategoriesService} from "./categories.service";
import {CategoryModel} from "./category.model";
import {CreateCategoryDto} from "./dto/create-categori.dto";


@ApiTags('CATEGORIES')
@Controller('categories')
export class CategoriesController {

    constructor(private categoriesService: CategoriesService) {}

    @ApiOperation({summary: 'Список категорій'})
    @ApiResponse({status: 200, type: [CategoryModel]})
    @Get()
    getUser () {
        return this.categoriesService.getAllCategories();
    }

    @ApiOperation({summary: 'Створення категорії'})
    @ApiResponse({status: 200, type: CategoryModel})
    @Post()
    createUser (@Body() userDto: CreateCategoryDto) {
        return this.categoriesService.createCategory(userDto);
    }
}
