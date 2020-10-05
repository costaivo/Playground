
import { IsEmail, IsNotEmpty, IsOptional } from "class-validator";


export class CreateEmployeeDto {
    @IsEmail()
    @IsNotEmpty()
    emailAddress: string;

    @IsNotEmpty()
    firstName: string;

    @IsOptional()
    middleName: string;

    @IsNotEmpty()
    lastName: string;
}