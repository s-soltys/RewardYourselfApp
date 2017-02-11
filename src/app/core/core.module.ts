import { TaskService } from './task/task.service';
import { NgModule } from '@angular/core';
import { Task } from './task/task';

@NgModule({
  providers: [
    TaskService
  ]
})
export class CoreModule { }

export {
  TaskService,
  Task
}