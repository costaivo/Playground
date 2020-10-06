import { Body, ClassSerializerInterceptor, Controller, Delete, Get, Param, ParseUUIDPipe, Post, Put, UseInterceptors, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { Employee } from './employee.entity';
import { EmployeeService } from './employee.service';

@Controller('employee')
@UseInterceptors(ClassSerializerInterceptor)
export class EmployeeController {

    constructor(private employeeService: EmployeeService) {

    }

    @Get()
    getEmployees(): Promise<Employee[]> {
        return this.employeeService.getEmployees();
    }
    @Get('/:id')
    getEmployeeById(@Param('id', ParseUUIDPipe) id: string): Promise<Employee> {
        return this.employeeService.getEmployeeById(id);
    }

    @Post()
    @UsePipes(ValidationPipe)
    createEmployee(@Body() createEmployeeDto: CreateEmployeeDto): Promise<Employee> {
        return this.employeeService.createEmployee(createEmployeeDto);
    }

    @Delete('/:id')
    deleteEmployee(@Param('id', ParseUUIDPipe) id: string): Promise<void> {
        return this.employeeService.deleteEmployee(id)
    }

    @Put('/:id')
    updateEmployee(@Param('id', ParseUUIDPipe) id: string,
    @Body() updateEmployeeDto:UpdateEmployeeDto): Promise<Employee> {
        return this.employeeService.updateEmployee(id,updateEmployeeDto);
    }

}
