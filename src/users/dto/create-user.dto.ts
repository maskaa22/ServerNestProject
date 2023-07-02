import {ApiProperty} from "@nestjs/swagger";
import {IsEmail, IsString, Length} from "class-validator";


export class CreateUserDto {

    @ApiProperty({example: 'user@gmail.com', description: 'email'})
    @IsString({message: 'Повинна бути рядком'})
    @IsEmail({},{message: 'Incorrect email'})
    readonly email: string;

    @ApiProperty({example: '12345', description: 'password'})
    @IsString({message: 'Повинна бути рядком'})
    @Length(4, 16, {message: 'Incorrect password'})
    readonly password: string;
}
