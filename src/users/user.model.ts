import {Column, Model, Table, DataType, HasMany} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";
import {CategoryModel} from "../categories/category.model";

interface UserCreationAttrs {
    email:string;
    password: string;
}

@Table({tableName: 'users'})
export class UserModel extends Model<UserModel, UserCreationAttrs> {

    @ApiProperty({example: 1, description: 'Унікальний ідентифікатор'})
    //@HasMany(() => CategoryModel, 'userId')
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id:number;

    @ApiProperty({example: 'example@gmail.com', description: 'Емейл'})
    @Column({type: DataType.STRING, unique: true, allowNull: false})
    email: string;

    @ApiProperty({example: 'dfgvdfg345tdfgdfg34tergfetv', description: 'Пароль'})
    @Column({type: DataType.STRING, allowNull: false})
    password: string;

    @ApiProperty({example: 'user', description: 'Роль', default: 'user'})
    @Column({type: DataType.STRING})
    role: string;

    @ApiProperty({example: [], description: 'Унікальний ідентифікатор категорій'})
    @HasMany(() => CategoryModel)
    //@ForeignKey(() => CategoryModel)
    categories:CategoryModel[];
}
