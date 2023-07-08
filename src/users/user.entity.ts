import {ApiProperty} from "@nestjs/swagger";
import {Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";

import {Category} from "../categories/category.entity";

@Entity()
export class User {

    @ApiProperty({example: 1, description: 'Unique identifier'})
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty({example: 'example@gmail.com', description: 'User email'})
    @Column({nullable: false})
    email: string;

    @ApiProperty({example: 'dfgvdfg345tdfgdfg34tergfetv', description: 'Password email'})
    @Column({nullable: false})
    password: string;

    @ApiProperty({example: 'user', description: 'User role', default: 'user'})
    @Column({nullable: true})
    role: string;

    @ApiProperty({example: '05.07.2023', description: 'User creation date'})
    @CreateDateColumn()
    createdAt: Date;

    @ApiProperty({example: '05.07.2023', description: 'Date of amendment'})
    @UpdateDateColumn()
    updatedAt: Date;

    @ApiProperty({example: [], description: 'Unique identifier category'})
    @OneToMany(() => Category, (category) => category.user)
    categories: Category[];
}
