import {Body, Controller, Get, Post, UseGuards} from '@nestjs/common';
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {CreateUserDto} from "./dto/create-user.dto";
import {UsersService} from "./users.service";
import {UserModel} from "./user.model";
import {JwtAuthGuard} from "../auth/jwt.auth.guard";

@ApiTags('USERS')
@Controller('users')
export class UsersController {

    constructor(private usersService: UsersService) {}

    @ApiOperation({summary: 'Список користувачів'})
    @ApiResponse({status: 200, type: [UserModel]})
    @UseGuards(JwtAuthGuard)
    @Get()
    getUser () {
        return this.usersService.getAllUsers();
    }

    @ApiOperation({summary: 'Створення користувача'})
    @ApiResponse({status: 200, type: UserModel})
    @Post()
    createUser (@Body() userDto: CreateUserDto) {
        return this.usersService.createUser(userDto);
    }
}
