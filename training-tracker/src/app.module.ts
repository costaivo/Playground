import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConfig } from './config/typeorm.config';
import { EmployeeModule } from './employee/employee.module';


@Module({
  imports: [
    TypeOrmModule.forRoot(TypeOrmConfig),
    EmployeeModule],
})
export class AppModule {}
