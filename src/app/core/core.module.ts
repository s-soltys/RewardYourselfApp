import { MinimongoService } from './minimongo.service';
import { TaskService } from './task.service';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [],
  providers: [
    TaskService,
    MinimongoService
  ],
  exports: [
    CommonModule,
    FormsModule
  ]
})
export class CoreModule { }
