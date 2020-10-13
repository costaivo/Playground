import { Body, ClassSerializerInterceptor, Controller, Delete, Get, Logger, Param, ParseUUIDPipe, Post, Put, UseInterceptors, UsePipes, ValidationPipe } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ApiBadRequestResponse, ApiForbiddenResponse } from '@nestjs/swagger/dist/decorators/api-response.decorator';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { Employee } from './employee.entity';
import { EmployeeService } from './employee.service';

@ApiBearerAuth()
@ApiTags('employee')
@ApiForbiddenResponse({ description: 'Forbidden.'})
@Controller('employee')
@UseInterceptors(ClassSerializerInterceptor)
export class EmployeeController {
    private logger = new Logger('EmployeeController');
    
    constructor(private employeeService: EmployeeService) {

    }

    @ApiResponse({
        status: 200,
        description: 'The found record',
        type: Employee,
      })
    @Get()
    getEmployees(): Promise<Employee[]> {
        this.logger.verbose(`Get Employees invoked`);
        return this.employeeService.getEmployees();
    }
    @Get('/:id')
    getEmployeeById(@Param('id', ParseUUIDPipe) id: string): Promise<Employee> {
        return this.employeeService.getEmployeeById(id);
    }

    @ApiOperation({ summary: 'Create Employee' })
    @ApiBadRequestResponse({description: 'Bad Request'})
    @Post()
    @UsePipes(ValidationPipe)
    createEmployee(@Body() createEmployeeDto: CreateEmployeeDto): Promise<Employee> {
        this.logger.verbose(`Create Employees invoked with params : ${JSON.stringify(createEmployeeDto)}`);
        return this.employeeService.createEmployee(createEmployeeDto);
    }

    @Delete('/:id')
    deleteEmployee(@Param('id', ParseUUIDPipe) id: string): Promise<void> {
        this.logger.verbose(`Deleting Employee with id ${id}`);
        return this.employeeService.deleteEmployee(id)
    }

    @Put('/:id')
    updateEmployee(@Param('id', ParseUUIDPipe) id: string,
    @Body() updateEmployeeDto : UpdateEmployeeDto): Promise<Employee> {
        this.logger.verbose(`Updating Employee with id ${id} with parameters : ${JSON.stringify(updateEmployeeDto)}`);
        return this.employeeService.updateEmployee(id,updateEmployeeDto);
    }

}
