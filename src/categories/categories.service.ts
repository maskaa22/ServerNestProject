import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";

import {Category} from "./category.entity";
import {CreateCategoryDto} from "./dto/create-categori.dto";
import {Task} from "../tasks/task.entity";

@Injectable()
export class CategoriesService {

    constructor(@InjectRepository(Category) private categoryRepository: Repository<Category>,
                @InjectRepository(Task) private taskRepository: Repository<Task>) {
    }

    async createCategory(dto: CreateCategoryDto, id: number) {
        const isExist = await this.categoryRepository.findBy({user: {id}, name: dto.name});

        if (isExist.length) {
            throw new HttpException('The category already exist', HttpStatus.BAD_REQUEST);
        }

        const date = Math.floor(Date.now() / 1000);
        const newCategory = {
            name: dto.name,
            dateCreated: date,
            user: {id}
        };

        return await this.categoryRepository.save(newCategory);
    }

    async getAllCategories(id: number) {
        return await this.categoryRepository.findBy({user: {id}});
    }

    async deleteCategory(id: number) {
        const category = await this.categoryRepository.findOne({where: {id}});

        if (!category) throw new HttpException('Category not found', HttpStatus.NOT_FOUND);

        const tasks = await this.taskRepository.find({where: {category: {id}}});

        const delTask = tasks.map(async task => {
            await this.taskRepository.delete({id: task.id})
        });

        if(delTask) return await this.categoryRepository.delete(id);
    }

    async editCategory(dto: CreateCategoryDto, id: number) {
        const category = await this.categoryRepository.findOne({where: {id}});

        if (!category) throw new HttpException('Category not found', HttpStatus.NOT_FOUND);

        const isNameExist = await this.categoryRepository.findBy({name: dto.name});

        if (isNameExist.length) throw new HttpException('The category name is already exist', HttpStatus.BAD_REQUEST);

        return await this.categoryRepository.update(id, dto);
    }
}
