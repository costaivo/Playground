import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmployeeController } from './employee.controller';
import { EmployeeRepository } from './employee.repository';
import { EmployeeService } from './employee.service';

@Module({
  imports:[TypeOrmModule.forFeature([EmployeeRepository])
],
  controllers: [EmployeeController],
  providers: [EmployeeService]
})
export class EmployeeModule {}
