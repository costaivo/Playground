import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { Employee } from './employee.entity';
import { EmployeeRepository } from './employee.repository';
import { UpdateEmployeeDto } from './dto/update-employee.dto';

@Injectable()
export class EmployeeService {

    constructor(
        @InjectRepository(EmployeeRepository)
        private employeeRepository: EmployeeRepository) { }


    getEmployees(): Promise<Employee[]> {
        return this.employeeRepository.getEmployees();
    }

    getEmployeeById(id: string): Promise<Employee> {
        const employee = this.employeeRepository.getEmployeeByExternalId(id);
        return employee;
    }

    createEmployee(createEmployeeDto: CreateEmployeeDto): Promise<Employee> {
        return this.employeeRepository.createEmployee(createEmployeeDto);
    }

    async updateEmployee(id: string, updateEmployeeDto: UpdateEmployeeDto): Promise<Employee> {
        return this.employeeRepository.updateEmployee(id, updateEmployeeDto);
    }


    async deleteEmployee(id: string): Promise<void> {
        const employee = await this.getEmployeeByExternalId(id);
        this.employeeRepository.remove(employee);
    }

    private async getEmployeeByExternalId(id: string) {
        const employee = await this.employeeRepository.getEmployeeByExternalId(id);
        if (!employee) {
            throw new NotFoundException(`Employee with Id "${id}" not found in DB`);
        }
        return employee;
    }
}
