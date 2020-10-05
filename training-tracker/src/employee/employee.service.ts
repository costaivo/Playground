import { Injectable, NotFoundException } from '@nestjs/common';
import { Employee } from './employee.entity';
import { v4 as uuid4} from 'uuid';
import { InjectRepository } from '@nestjs/typeorm';
import { EmployeeRepository } from './employee.repository';
import { CreateEmployeeDto } from './dto/create-employee.dto';


@Injectable()
export class EmployeeService {
 
    constructor(
        @InjectRepository(EmployeeRepository)
        private employeeRepository: EmployeeRepository) { }


    async getEmployees(): Promise<Employee[]> {
        return this.employeeRepository.getEmployees();
    }

   async  getEmployeeById(id: number): Promise<Employee> {
        const employee = await this.employeeRepository.findOne(id);
        return employee;
    }

   async createEmployee(createEmployeeDto: CreateEmployeeDto): Promise<Employee> {
        return this.employeeRepository.createEmployee(createEmployeeDto);
    }

    async deleteEmployee(id:number):Promise<void>{
        const result = await this.employeeRepository.delete(id);
        if(result.affected === 0 ){
            throw new NotFoundException(`Employee with id "${id}" not found`)
        }
    }

   async  updateEmployee(id: number, updateEmployee: CreateEmployeeDto) :Promise<Employee>{
        const employee = await this.employeeRepository.findOne(id);
        if(employee===null ){
            throw new NotFoundException(`Employee with id "${id}" not found`)
        }
        const {firstName, lastName,emailAddress}= updateEmployee;
        employee.firstName = updateEmployee.firstName;
        employee.lastName = updateEmployee.lastName;
        employee.emailAddress = updateEmployee.emailAddress;
        await employee.save();
        return employee;
    }
}
