import {ApiProperty} from "@nestjs/swagger";
import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from "typeorm";
import {Category} from "../categories/category.entity";

@Entity()
export class Task {

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
    @Column()
    dateStart: Date;

    @ApiProperty({example: '12-12-2023', description: 'Дата створення категорії'})
    //@Column({type: DataType.DATE, allowNull: false})
    @Column()
    dateEnd: Date;

    @ApiProperty({example: '12-12-2023', description: 'Дата створення категорії'})
    //@Column({type: DataType.DATE, allowNull: false})
    @Column()
    description: string;

    @ApiProperty({example: '12-12-2023', description: 'Дата створення', default: '12-12-2023'})
    //@Column({type: DataType.STRING})
    @CreateDateColumn()
    createdAt: Date;

    @ApiProperty({example: '12-12-2023', description: 'Дата внесення змін', default: '12-12-2023'})
    //@Column({type: DataType.STRING})
    @UpdateDateColumn()
    updatedAt: Date;

    @ManyToOne(() => Category, (category) => category.tasks)
    @JoinColumn({name: 'categoryId'})
    category:Category

}
