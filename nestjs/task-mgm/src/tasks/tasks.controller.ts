import { Controller, Get, Body, Post, Param, Delete, Patch, Query, UsePipes, ValidationPipe, ParseIntPipe, UseGuards } from '@nestjs/common';
import { TasksService } from './tasks.service';
import {  TaskStatus } from './task-status.enum';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
import { TaskStatusValidationPipe } from './pipes/task-status-validation.pipe';
import { Task } from './task.entity';
import { AuthGuard } from '@nestjs/passport';
import { User } from 'src/auth/user.entity';
import { GetUser } from 'src/auth/dto/get-user.decorator';

@Controller('tasks')
@UseGuards(AuthGuard())
export class TasksController {
    constructor(private tasksService: TasksService) {
    }

    @Get()
    getTasks(@Query(ValidationPipe) filterDto: GetTasksFilterDto):Promise<Task[]> {
        return this.tasksService.getTasks(filterDto);
    }
    @Get('/:id')
    getTaskById(@Param('id',ParseIntPipe) id: number):Promise<Task> {
        return this.tasksService.getTaskById(id);
    }

    @Post()
    @UsePipes(ValidationPipe)
    createTask(@Body() createTaskDto: CreateTaskDto,
    @GetUser() user:User) {
        return this.tasksService.createTask(createTaskDto,user);
    }
    @Delete('/:id')
    deleteTask(@Param('id',ParseIntPipe) id: number):Promise<void> {
      return  this.tasksService.deleteTask(id);
    }
    @Patch('/:id/status')
    updateTask(
        @Param('id',ParseIntPipe) id: number,
        @Body('status',TaskStatusValidationPipe) status: TaskStatus
    ): Promise<Task> {
        return this.tasksService.updateTaskStatus(id, status);
    }
}
