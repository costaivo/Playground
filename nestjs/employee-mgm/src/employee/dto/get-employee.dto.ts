
import { Designation } from "../employee.entity";

export class GetEmployeeDto{
    externalId:string;
    firstName:string;
    middleName:string;
    lastName:string;
    employeeCode:string;
    teamName:string;
    designation:Designation; 
    dateOfJoining:Date;
    mobileNumber:string;
    emailAddress:string;
}