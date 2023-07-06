import {HttpException, HttpStatus, Injectable, UnauthorizedException} from '@nestjs/common';
import {CreateUserDto} from "../users/dto/create-user.dto";
import {UsersService} from "../users/users.service";
import {JwtService} from "@nestjs/jwt";
import * as bcrypt from 'bcryptjs';
import {User} from "../users/user.entity";

@Injectable()
export class AuthService {

   constructor(private usersService: UsersService, private jwtService: JwtService) {}

    async login(userDto: CreateUserDto) {
        const user = await this.validateUser(userDto);
        if(!user) {
            throw new HttpException('User already exist', HttpStatus.UNAUTHORIZED);
        }
       return this.generateToken(user);
    }

    async registration(userDto: CreateUserDto) {
        const email = await this.usersService.getUserByEmail(userDto.email);
        if(email) {
            throw new HttpException('The user with this email is registered', HttpStatus.BAD_REQUEST);
        }
        const hashPassword = await bcrypt.hash(userDto.password, 5);

        return await this.usersService.createUser({...userDto, password: hashPassword});
    }

    private async generateToken(user: User) {
        const payload = {id: user.id, email: user.email};
        return {
            user_id: user.id,
            access_token: this.jwtService.sign(payload)
        }
    }

    private async validateUser(userDto: CreateUserDto) {
        const user = await this.usersService.getUserByEmail(userDto.email);
        if(!user) {
            throw new UnauthorizedException({message: 'Incorrect email or password'})
        }
        const passwordEquals = await bcrypt.compare(userDto.password, user.password);
        if (user && passwordEquals) {
            return user;
        }
        throw new UnauthorizedException({message: 'Incorrect email or password'})
    }
}
