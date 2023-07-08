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

    @ApiProperty({example: 1, description: 'Unique identifier'})
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty({example: 'Autorization', description: 'Task name'})
    @Column({nullable: false})
    name: string;

    @ApiProperty({example: '05.07.2023', description: 'Task start date'})
    @Column()
    dateStart: Date;

    @ApiProperty({example: '10.07.2023', description: 'End date of the task'})
    @Column()
    dateEnd: Date;

    @ApiProperty({example: '05.07.2023', description: 'Task description'})
    @Column()
    description: string;

    @ApiProperty({example: '05.07.2023', description: 'Task creation date'})
    @CreateDateColumn()
    createdAt: Date;

    @ApiProperty({example: '05.07.2023', description: 'Date of amendment'})
    @UpdateDateColumn()
    updatedAt: Date;

    @ManyToOne(() => Category, (category) => category.tasks)
    @JoinColumn({name: 'categoryId'})
    category: Category

}
