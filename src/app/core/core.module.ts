import { TaskService } from './task.service';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import minimongo from './minimongo';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [],
  providers: [
    TaskService,
    { provide: 'minimongo', useValue: minimongo }
  ],
  exports: [
    CommonModule,
    FormsModule
  ]
})
export class CoreModule { }
