import {ApiProperty} from "@nestjs/swagger";

export class CreateCategoryDto {

    @ApiProperty({example: 'developer', description: 'Назва категорії'})
    readonly name: string;

}
