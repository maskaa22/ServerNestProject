import {ApiProperty} from "@nestjs/swagger";
import {IsEmail, IsString, Length} from "class-validator";

export class CreateUserDto {

    @ApiProperty({example: 'user@gmail.com', description: 'User email'})
    @IsString({message: 'Must be a line'})
    @IsEmail({}, {message: 'Incorrect email'})
    readonly email: string;

    @ApiProperty({example: '23rff3', description: 'password'})
    @IsString({message: 'Must be a line'})
    @Length(4, 16, {message: 'Incorrect password'})
    readonly password: string;
}
