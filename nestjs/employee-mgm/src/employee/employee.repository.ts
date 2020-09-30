import {  EntityRepository, Repository } from "typeorm";
import { Employee } from "./employee.entity";
import { v4 as uuidv4 } from 'uuid';
import { CreateEmployeeDto } from "./dto/create-employee.dto";
import { BadRequestException } from "@nestjs/common";


@EntityRepository(Employee)
export class EmployeeRepository extends Repository<Employee> {

    async createEmployee(createEmployeeDto: CreateEmployeeDto): Promise<Employee> {

        const { firstName, lastName, employeeCode, emailAddress,
            mobileNumber, dateOfJoining, teamName, designation } = createEmployeeDto;

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
        this.setEmployeeFields(employee, employeeCode, firstName, lastName,
            emailAddress, dateOfJoining, teamName, designation, mobileNumber);
        await employee.save();
        return employee;

    }

    async getEmployeeByEmailOrCode(emailAddress: string, employeeCode: string): Promise<Employee[]> {
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

    private setEmployeeFields(employee: Employee, employeeCode: string,
        firstName: string, lastName: string, emailAddress: string,
        dateOfJoining: Date, teamName: string, designation:
            string, mobileNumber: string) {
        employee.employeeCode = employeeCode;
        employee.firstName = firstName;
        employee.lastName = lastName;
        employee.emailAddress = emailAddress;
        employee.dateOfJoining = dateOfJoining;
        employee.teamName = teamName;
        employee.designation = designation;
        employee.mobileNumber = mobileNumber;
    }
}