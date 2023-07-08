import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {Body, Controller, Delete, Get, Param, Patch, Post, Req, UseGuards} from '@nestjs/common';

import {CategoriesService} from "./categories.service";
import {CreateCategoryDto} from "./dto/create-categori.dto";
import {Category} from "./category.entity";
import {JwtAuthGuard} from "../auth/jwt.auth.guard";

@ApiTags('CATEGORIES')
@Controller('categories')
export class CategoriesController {

    constructor(private categoriesService: CategoriesService) {
    }

    @ApiOperation({summary: 'Categories list'})
    @ApiResponse({status: 200, type: [Category]})
    @UseGuards(JwtAuthGuard)
    @Get()
    getCategoriesForUser(@Req() req) {
        return this.categoriesService.getAllCategories(+req.user.id);
    }

    @ApiOperation({summary: 'Create category'})
    @ApiResponse({status: 200, type: Category})
    @UseGuards(JwtAuthGuard)
    @Post()
    createCategory(@Body() categoryDto: CreateCategoryDto, @Req() req) {
        return this.categoriesService.createCategory(categoryDto, +req.user.id);
    }

    @ApiOperation({summary: 'Delete category'})
    @ApiResponse({status: 200, type: Category})
    @UseGuards(JwtAuthGuard)
    @Delete(':id')
    deleteCategory(@Param('id') id: number) {
        return this.categoriesService.deleteCategory(id);
    }

    @ApiOperation({summary: 'Edit category'})
    @ApiResponse({status: 200, type: Category})
    @UseGuards(JwtAuthGuard)
    @Patch(':id')
    editCategory(@Body() categoryDto: CreateCategoryDto, @Param('id') id: number) {
        return this.categoriesService.editCategory(categoryDto, id);
    }
}
