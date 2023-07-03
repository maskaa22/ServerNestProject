import {Injectable} from '@nestjs/common';
import {CreateUserDto} from "./dto/create-user.dto";
import {InjectRepository} from "@nestjs/typeorm";
import {User} from "./user.entity";
import {Repository} from "typeorm";

@Injectable()
export class UsersService {

    constructor(@InjectRepository(User) private userRepository: Repository<User>) {}

    async createUser(dto: CreateUserDto) {
        return await this.userRepository.save(dto);
    }

    async getAllUsers () {
        return await this.userRepository.find();
    }

    async getUserByEmail (email: string) {
        return await this.userRepository.findOne({where: {email}});
    }

}
