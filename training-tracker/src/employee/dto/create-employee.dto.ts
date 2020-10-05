import { IsEmail, IsNotEmpty, IsOptional } from "class-validator";

export class CreateEmployeeDto {
    @IsNotEmpty()
    firstName:string;

    @IsNotEmpty()
    lastName:string;

    @IsOptional()
    middleName:string;

    @IsNotEmpty()
    @IsEmail()
    email:string;
}