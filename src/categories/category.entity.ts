import {ApiProperty} from "@nestjs/swagger";
import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from "typeorm";

import {Task} from "../tasks/task.entity";
import {User} from "../users/user.entity";

@Entity()
export class Category {

    @ApiProperty({example: 1, description: 'Unique identifier'})
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty({example: 'Development', description: 'Category name'})
    @Column({nullable: false})
    name: string;

    @ApiProperty({example: '05.07.2023', description: 'Category creation date'})
    @Column()
    dateCreated: number;

    @ApiProperty({example: '05.07.2023', description: 'Category creation date'})
    @CreateDateColumn()
    createdAt: Date;

    @ApiProperty({example: '05.07.2023', description: 'Date of amendment'})
    @UpdateDateColumn()
    updatedAt: Date;

    @ManyToOne(() => User, (user) => user.categories)
    @JoinColumn({name: 'userId'})
    user: User;

    @OneToMany(() => Task, (task) => task.category, {onDelete: "CASCADE"})
    tasks: Task[];
}
