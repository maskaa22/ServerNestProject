import {ApiProperty} from "@nestjs/swagger";
import {Category} from "../categories/category.entity";
import {Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";

@Entity()
export class User  {

    @ApiProperty({example: 1, description: 'Унікальний ідентифікатор'})
    //@HasMany(() => CategoryModel, 'userId')
    //@Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    @PrimaryGeneratedColumn()
    id:number;

    @ApiProperty({example: 'example@gmail.com', description: 'Емейл'})
    //@Column({type: DataType.STRING, unique: true, allowNull: false})
    @Column({nullable: false})
    email: string;

    @ApiProperty({example: 'dfgvdfg345tdfgdfg34tergfetv', description: 'Пароль'})
    //@Column({type: DataType.STRING, allowNull: false})
    @Column({nullable: false})
    password: string;

    @ApiProperty({example: 'user', description: 'Роль', default: 'user'})
    //@Column({type: DataType.STRING})
    @Column({nullable: true})
    role: string;

    @ApiProperty({example: '12-12-2023', description: 'Дата створення', default: '12-12-2023'})
    //@Column({type: DataType.STRING})
    @CreateDateColumn()
    createdAt: Date;

    @ApiProperty({example: '12-12-2023', description: 'Дата внесення змін', default: '12-12-2023'})
    //@Column({type: DataType.STRING})
    @UpdateDateColumn()
    updatedAt: Date;

    @ApiProperty({example: [], description: 'Унікальний ідентифікатор категорій'})
    @OneToMany(() => Category, (category) => category.user)
    //@ForeignKey(() => CategoryModel)
    categories:Category[];
}
