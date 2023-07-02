import {Injectable} from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {CategoryModel} from "./category.model";
import {CreateCategoryDto} from "./dto/create-categori.dto";


@Injectable()
export class CategoriesService {

    constructor(@InjectModel(CategoryModel) private categoryRepository: typeof CategoryModel) {}

    async createCategory (dto: CreateCategoryDto) {
        return await this.categoryRepository.create(dto);
    }

    async getAllCategories () {
        return await this.categoryRepository.findAll();
    }
}
