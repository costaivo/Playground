import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Patch, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { EmployeeService } from './employee.service';

@Controller('employee')
export class EmployeeController {


    constructor(private employeeService: EmployeeService) {

    }

    @Get()
    getAllEmployees() {
        return this.employeeService.getAllEmployees();
    }

    @Get('/:id')
    getEmployeeById(@Param('id', ParseUUIDPipe) id: string) {
        return this.employeeService.getEmployeeById(id);
    }

    @Post()
    @UsePipes(ValidationPipe)
    createEmployee(@Body() createEmployee: CreateEmployeeDto) {
        console.log(createEmployee);
        return this.employeeService.createEmployee(createEmployee);
    }

    @Delete('/:id')
    deleteEmployee(@Param('id', ParseUUIDPipe) id: string) {
        return this.employeeService.deleteEmployee(id);
    }

    @Put('/:id')
    updateEmployee(@Param('id', ParseUUIDPipe) id: string, @Body() updateEmployee) {
        console.log(updateEmployee);
        return "Updated Employee :" + id
    }
}
