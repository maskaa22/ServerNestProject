import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {Body, Controller, Post} from '@nestjs/common';

import {AuthService} from "./auth.service";
import {CreateUserDto} from "../users/dto/create-user.dto";
import {User} from "../users/user.entity";

@ApiTags('AUTH')
@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService) {
    }

    @ApiOperation({summary: 'Autorization'})
    @ApiResponse({status: 200, type: User})
    @Post('/login')
    login(@Body() userDto: CreateUserDto) {
        return this.authService.login(userDto)
    }

    @ApiOperation({summary: 'Registration'})
    @ApiResponse({status: 200, type: User})
    @Post('/registration')
    registration(@Body() userDto: CreateUserDto) {
        return this.authService.registration(userDto)
    }
}
