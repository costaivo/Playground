import { Controller, Get } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from 'dist/tasks/task.model';

@Controller('tasks')
export class TasksController {
    constructor(private tasksService: TasksService){
    }

    @Get()
    getAllTasks():Task[]{
        return this.tasksService.getAllTasks();
    }
}
