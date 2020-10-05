import { EntityRepository, Repository } from "typeorm";
import { Employee } from "./employee.entity";
import { v4 as uuidv4 } from 'uuid';
import { CreateEmployeeDto } from "./dto/create-employee.dto";
import { BadRequestException } from "@nestjs/common";


@EntityRepository(Employee)
export class EmployeeRepository extends Repository<Employee> {

    async createEmployee(createEmployeeDto: CreateEmployeeDto): Promise<Employee> {

        const { firstName, lastName, emailAddress, } = createEmployeeDto;

        const employee = new Employee();
        employee.emailAddress = emailAddress;
        employee.firstName = firstName;
        employee.lastName = lastName;
        await employee.save();
        return employee;

    }

    async getEmployees(): Promise<Employee[]> {
        const query = this.createQueryBuilder('employee');
        const employees = await query.getMany();
        return employees;
    }
}