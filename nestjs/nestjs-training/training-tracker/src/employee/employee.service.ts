import { Injectable } from '@nestjs/common';
import { Employee } from './employee.entity';
import { v4 as uuid4} from 'uuid';

@Injectable()
export class EmployeeService {
    private employees: Employee[] = [];

    createEmployee(createEmployee: any) {
        const { firstName, lastName } = createEmployee;

        const emp = new Employee();
        emp.id = uuid4();
        emp.firstName = firstName;
        emp.lastName = lastName;
        this.employees.push(emp);
        return emp;
    }

    getAllEmployees() {
        return this.employees;
    }

    getEmployeeById(id: string) {
        return this.employees.find(x => x.id == id);
    }

    deleteEmployee(id: string) {
        const newList = this.employees.filter(x => x.id == id);
        this.employees = newList;
    }
}
