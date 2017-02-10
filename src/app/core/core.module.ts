import { TaskService } from './task.service';
import { NgModule } from '@angular/core';
import { Task } from './task';

@NgModule({
  declarations: [],
  providers: [
    TaskService
  ]
})
export class CoreModule { }

export {
  TaskService,
  Task
}