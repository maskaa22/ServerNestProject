import {Injectable} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";

import {CreateUserDto} from "./dto/create-user.dto";
import {Repository} from "typeorm";
import {User} from "./user.entity";

@Injectable()
export class UsersService {

    constructor(@InjectRepository(User) private userRepository: Repository<User>) {
    }

    async createUser(dto: CreateUserDto) {
        return await this.userRepository.save(dto);
    }

    async getAllUsers() {
        return await this.userRepository.find();
    }

    async getUserByEmail(email: string) {
        return await this.userRepository.findOne({where: {email}});
    }
}
