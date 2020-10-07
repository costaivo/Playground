
import { IsNotEmpty } from "class-validator";
import { BaseEmployeeDto } from "./base-employee.dto";
import {ApiProperty} from '@nestjs/swagger';
export class CreateEmployeeDto extends BaseEmployeeDto{
    @ApiProperty()
    @IsNotEmpty()
    employeeCode:string;
}