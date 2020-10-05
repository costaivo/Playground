import { Body, Controller, Delete, Get, Param, ParseIntPipe, ParseUUIDPipe, Patch, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { Employee } from './employee.entity';
import { EmployeeService } from './employee.service';

@Controller('employee')
export class EmployeeController {


    constructor(private employeeService: EmployeeService) {

    }

    @Get()
    getAllEmployees(): Promise<Employee[]> {
        return this.employeeService.getEmployees();
    }

    @Get('/:id')
    getEmployeeById(@Param('id', ParseIntPipe) id: number): Promise<Employee> {
        return this.employeeService.getEmployeeById(id);
    }

    @Post()
    @UsePipes(ValidationPipe)
    createEmployee(@Body() createEmployee: CreateEmployeeDto): Promise<Employee> {
        console.log(createEmployee);
        return this.employeeService.createEmployee(createEmployee);
    }

    @Delete('/:id')
    deleteEmployee(@Param('id', ParseIntPipe) id: number): Promise<void> {
        return this.employeeService.deleteEmployee(id);
    }

    @Put('/:id')
    updateEmployee(@Param('id', ParseIntPipe) id: number,
        @Body() updateEmployee: CreateEmployeeDto): Promise<Employee> {
        return this.employeeService.updateEmployee(id, updateEmployee);
    }
}
