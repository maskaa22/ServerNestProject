import {Injectable} from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {UserModel} from "./user.model";
import {CreateUserDto} from "./dto/create-user.dto";

@Injectable()
export class UsersService {

    constructor(@InjectModel(UserModel) private userRepository: typeof UserModel) {}

    async createUser (dto: CreateUserDto) {
        return await this.userRepository.create(dto);
    }

    async getAllUsers () {
        return await this.userRepository.findAll({include: {all: true}});
    }

    async getUserByEmail (email: string) {
        return await this.userRepository.findOne({where: {email}, include: {all: true}});
    }

}
