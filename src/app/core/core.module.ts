import { UtilModule } from './../util/util.module';
import { MinimongoService } from './minimongo.service';
import { TaskService } from './task.service';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    UtilModule
  ],
  declarations: [],
  providers: [
    TaskService,
    MinimongoService
  ],
  exports: [
    CommonModule,
    FormsModule,
    UtilModule
  ]
})
export class CoreModule { }

export {
  TaskService
}