import {ApiProperty} from "@nestjs/swagger";
import {Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";
import {User} from "../users/user.entity";

@Entity()
export class Category {

    @ApiProperty({example: 1, description: 'Унікальний ідентифікатор'})
    //@Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    @PrimaryGeneratedColumn()
    id:number;

    @ApiProperty({example: 'example@gmail.com', description: 'Назва категорії'})
    //@Column({type: DataType.STRING, allowNull: false})
    @Column({nullable: false})
    name: string;

    @ApiProperty({example: '12-12-2023', description: 'Дата створення категорії'})
    //@Column({type: DataType.DATE, allowNull: false})
    dateCreated: Date;

    @ApiProperty({example: '12-12-2023', description: 'Дата створення', default: '12-12-2023'})
    //@Column({type: DataType.STRING})
    @CreateDateColumn()
    createdAt: Date;

    @ApiProperty({example: '12-12-2023', description: 'Дата внесення змін', default: '12-12-2023'})
    //@Column({type: DataType.STRING})
    @UpdateDateColumn()
    updatedAt: Date;

    @ManyToOne(() => User, (user) => user.categories)
    //@JoinColumn({name: 'id'})
    user:User

    // @ApiProperty({example: 'dfgvdfg345tdfgdfg34tergfetv', description: 'Роль', default: 'Ідентифікатор користувача'})
    // //@BelongsTo(() => UserModel, 'id')
    // @ForeignKey(() => UserModel)
    // @Column({type: DataType.INTEGER, allowNull: false})
    // userId: number;
    //
    // @BelongsTo(() => UserModel)
    // user: UserModel;
}