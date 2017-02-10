import { UtilModule } from './../util/util.module';
import { TaskService } from './task.service';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task } from './task';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    UtilModule
  ],
  declarations: [],
  providers: [
    TaskService
  ],
  exports: [
    CommonModule,
    FormsModule,
    UtilModule
  ]
})
export class CoreModule { }

export {
  TaskService,
  Task
}