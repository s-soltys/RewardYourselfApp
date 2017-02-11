import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskFormComponent } from './task-form/task-form.component';
import { TaskDashboardComponent } from './task-dashboard/task-dashboard.component';
import { TaskCardComponent } from './task-card/task-card.component';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [TaskListComponent, TaskFormComponent, TaskDashboardComponent, TaskCardComponent],
  exports: [TaskDashboardComponent]
})
export class TaskModule { }
