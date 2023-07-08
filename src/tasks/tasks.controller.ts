import {Body, Controller, Delete, Get, Param, Patch, Post, UseGuards} from '@nestjs/common';
import {ApiOperation, ApiResponse} from "@nestjs/swagger";
import {JwtAuthGuard} from "../auth/jwt.auth.guard";
import {TasksService} from "./tasks.service";
import {Task} from "./task.entity";
import {CreateTaskDto} from "./dto/create-task.dto";

@Controller()
export class TasksController {

    constructor(private tasksService: TasksService) {}

    @ApiOperation({summary: 'Creat task'})
    @ApiResponse({status: 200, type: Task})
    @UseGuards(JwtAuthGuard)
    @Post('categories/:id/task')
    createCategory (@Body() taskDto: CreateTaskDto, @Param('id') id:number) {
        return this.tasksService.createTask(taskDto, id);
    }

    @ApiOperation({summary: 'Tasks list'})
    @ApiResponse({status: 200, type: [Task]})
    @UseGuards(JwtAuthGuard)
    @Get('categories/:id/task')
    getTaskForIdCategoryForUser (@Param('id') id:number) {
        return this.tasksService.getAllTasks(id);
    }

    @ApiOperation({summary: 'Count task'})
    @ApiResponse({status: 200, type: 'number'})
    @UseGuards(JwtAuthGuard)
    @Get('categories/:id/tasks')
    getCountForCategoryId (@Param('id') id:number) {
        return this.tasksService.getCount(id);
    }

    @ApiOperation({summary: 'Edit task'})
    @ApiResponse({status: 200, type: Task})
    @UseGuards(JwtAuthGuard)
    @Patch('categories/:id/task/:task_id')
    editTask (@Body() taskDto: CreateTaskDto, @Param('task_id') id:number) {
        return this.tasksService.editTask(taskDto, id);
    }

    @ApiOperation({summary: 'Edit task'})
    @ApiResponse({status: 200, type: Task})
    @UseGuards(JwtAuthGuard)
    @Delete('categories/:category_id/task/:task_id')
    deleteTask (@Param('task_id') id:number) {
        return this.tasksService.deleteTask(id);
    }

}
