import { FormsModule } from '@angular/forms';
import { UtilModule } from './../util/util.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskFormComponent } from './task-form/task-form.component';
import { TaskDashboardComponent } from './task-dashboard/task-dashboard.component';
import { MaterialModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    UtilModule,
    MaterialModule.forRoot()
  ],
  declarations: [TaskListComponent, TaskFormComponent, TaskDashboardComponent],
  exports: [TaskDashboardComponent]
})
export class TaskModule { }
