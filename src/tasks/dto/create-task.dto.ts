import {ApiProperty} from "@nestjs/swagger";
import {IsString} from "class-validator";

export class CreateTaskDto {

    @ApiProperty({example: 'user@gmail.com', description: 'email'})
    @IsString({message: 'Повинна бути рядком'})
    readonly name: string;

    @ApiProperty({example: 'user@gmail.com', description: 'email'})
    @IsString({message: 'Повинна бути рядком'})
    readonly description: string;

    @ApiProperty({example: 'user@gmail.com', description: 'email'})
    //@IsDate({message: 'DATE incorrect1'})
    readonly dateStart: Date;

    @ApiProperty({example: 'user@gmail.com', description: 'email'})
    //@IsDate({message: 'DATE incorrect2'})
    readonly dateEnd: Date;

    //readonly idCategory: number;
}
