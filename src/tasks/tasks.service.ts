import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {Task} from "./task.entity";
import {CreateTaskDto} from "./dto/create-task.dto";
import {Category} from "../categories/category.entity";

@Injectable()
export class TasksService {

    constructor(@InjectRepository(Task) private taskRepository: Repository<Task>,
                @InjectRepository(Category) private categoryRepository: Repository<Category>) {}

    async createTask(dto: CreateTaskDto, id: number) {

        const isExist = await this.taskRepository.findBy({category: {id}, name: dto.name});
        if(isExist.length) {
            throw new HttpException('The task already exist', HttpStatus.BAD_REQUEST);
        }

        const newTask = {
            name: dto.name,
            description: dto.description,
            dateStart: dto.dateStart,
            dateEnd: dto.dateEnd,
            category: {id}
        }
        return await this.taskRepository.save(newTask);
    }

    async getAllTasks(id: number) {
        const tasks = await this.taskRepository.findBy({category: {id}})
        const nameCategory = await this.categoryRepository.findOne({where: {id}})
        return {tasks, nameCategory};
        //return await this.taskRepository.findBy({category: {id}});
    }

    async getCount(id: number) {
        return await this.taskRepository.count({where: {category: {id}}})
    }

    async editTask(dto: CreateTaskDto, id: number) {
        const task = await this.taskRepository.findOne({where: {id}});

        if(!task) throw new HttpException('Task not found', HttpStatus.NOT_FOUND);

        const isNameExist = await this.taskRepository.findBy({
            name: dto.name
        });

        if(isNameExist.length) throw new HttpException('The task name is already exist', HttpStatus.BAD_REQUEST);

        return await this.taskRepository.update(id, {
            name: dto.name,
            description: dto.description,
            dateStart: dto.dateStart,
            dateEnd: dto.dateEnd,
        });
    }

    async deleteTask(id: number) {
        const task = await this.taskRepository.findOne({where: {id}});

        if(!task) throw new HttpException('Task not found', HttpStatus.NOT_FOUND);

        return await this.taskRepository.delete(id);
    }

}
