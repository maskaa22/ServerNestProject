import {ApiProperty} from "@nestjs/swagger";
import {IsString} from "class-validator";

export class CreateTaskDto {

    @ApiProperty({example: 'Development', description: 'Category name'})
    @IsString({message: 'Must be a line'})
    readonly name: string;

    @ApiProperty({example: 'For admin', description: 'Category description'})
    @IsString({message: 'Must be a line'})
    readonly description: string;

    @ApiProperty({example: '05.07.2023', description: 'Task start date'})
    readonly dateStart: Date;

    @ApiProperty({example: '10.07.2023', description: 'End date of the task'})
    readonly dateEnd: Date;
}
