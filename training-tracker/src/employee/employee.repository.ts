import {  EntityRepository, Repository } from "typeorm";
import { Employee } from "./employee.entity";
import { v4 as uuidv4 } from 'uuid';
import { CreateEmployeeDto } from "./dto/create-employee.dto";
import { BadRequestException } from "@nestjs/common";
import { BaseEmployeeDto } from "./dto/base-employee.dto";
import { UpdateEmployeeDto } from "./dto/update-employee.dto";


@EntityRepository(Employee)
export class EmployeeRepository extends Repository<Employee> {

    async createEmployee(createEmployeeDto: CreateEmployeeDto): Promise<Employee> {

        const { employeeCode, emailAddress} = createEmployeeDto;

        // Validate if the employeeCode or Email Address is not not present in the DB
        const existingEmployees = await this.getEmployeeByEmailOrCode(emailAddress, employeeCode);

        if (existingEmployees.length > 0) {
            if (existingEmployees[0].emailAddress == emailAddress)
                throw new BadRequestException(`Employee Email Address: "${emailAddress}" already exists in DB`);
            if (existingEmployees[0].employeeCode == employeeCode)
                throw new BadRequestException(`Employee Code: "${employeeCode}" already exists in DB`);
        }

        const employee = new Employee();
        employee.externalId = uuidv4();
        employee.employeeCode = employeeCode;
        this.setEmployeeFields(employee, createEmployeeDto);
        await employee.save();
        return employee;

    }

    async updateEmployee(externalId: string,updateEmployeeDto:UpdateEmployeeDto):Promise<Employee> {
        const employee = await this.getEmployeeByExternalId(externalId);
        this.setEmployeeFields(employee, updateEmployeeDto);
        await employee.save();
        return employee;
    }

    async getEmployeeByEmailOrCode(emailAddress: string, employeeCode: string=null): Promise<Employee[]> {
        const query = this.createQueryBuilder('employee');
        if (emailAddress) {
            query.where('employee.emailAddress =:emailAddress', { emailAddress })
        }
        if (employeeCode) {
            query.where('employee.employeeCode =:employeeCode', { employeeCode })
        }
        const employees = await query.getMany();
        return employees;
    }

    async getEmployees(): Promise<Employee[]> {
        const query = this.createQueryBuilder('employee');
        const employees = await query.getMany();
        return employees;
    }

    async getEmployeeByExternalId(externalId: string): Promise<Employee> {
        const query = this.createQueryBuilder('employee');
        query.where('employee.externalId = :externalId', { externalId });
        const employee = await query.getOne();
        return employee;
    }

    private setEmployeeFields(employee:Employee,dto:BaseEmployeeDto) {
        employee.firstName = dto.firstName;
        employee.lastName = dto.lastName;
        employee.emailAddress = dto.emailAddress;
        employee.dateOfJoining = dto.dateOfJoining;
        employee.teamName = dto.teamName;
        employee.designation = dto.designation;
        employee.mobileNumber = dto.mobileNumber;
    }
}