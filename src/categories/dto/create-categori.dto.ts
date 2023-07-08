import {ApiProperty} from "@nestjs/swagger";

export class CreateCategoryDto {

    @ApiProperty({example: 'Developer', description: 'Name of category'})
    readonly name: string;
}
