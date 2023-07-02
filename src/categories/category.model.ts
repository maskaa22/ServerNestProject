import {Column, Model, Table, DataType, ForeignKey, BelongsTo} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";
import {UserModel} from "../users/user.model";

@Table({tableName: 'categories'})
export class CategoryModel extends Model<CategoryModel> {

    @ApiProperty({example: 1, description: 'Унікальний ідентифікатор'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id:number;

    @ApiProperty({example: 'example@gmail.com', description: 'Назва категорії'})
    @Column({type: DataType.STRING, allowNull: false})
    name: string;

    @ApiProperty({example: '12-12-2023', description: 'Дата створення категорії'})
    @Column({type: DataType.DATE, allowNull: false})
    dateCreated: Date;

    @ApiProperty({example: 'dfgvdfg345tdfgdfg34tergfetv', description: 'Роль', default: 'Ідентифікатор користувача'})
    //@BelongsTo(() => UserModel, 'id')
    @ForeignKey(() => UserModel)
    @Column({type: DataType.INTEGER, allowNull: false})
    userId: number;

    @BelongsTo(() => UserModel)
    user: UserModel;
}
