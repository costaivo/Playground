
import { IsEnum, IsISO8601, IsNotEmpty, IsNumberString, IsOptional } from "class-validator";
import { Designation } from "../employee.entity";
import {ApiProperty} from '@nestjs/swagger';

export class BaseEmployeeDto{
    @ApiProperty()
    @IsNotEmpty()
    firstName:string;

    @ApiProperty({required:false})
    @IsOptional()
    middleName:string;

    @ApiProperty()
    @IsNotEmpty()
    lastName:string;

    @ApiProperty({required:false})
    @IsOptional()
    teamName:string;
    
    @ApiProperty({enum:Designation,default:Designation.JUNIOR_DEVELOPER})
    @IsEnum(Designation)
    designation:Designation;
    
    
    @ApiProperty()
    @IsISO8601()
    dateOfJoining:Date;
    
    @ApiProperty()
    @IsNumberString()
    mobileNumber:string;
    
    @ApiProperty()
    @IsNotEmpty()
    emailAddress:string;
}