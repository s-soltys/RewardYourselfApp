import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimelineListComponent } from './timeline-list/timeline-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TimelineListComponent],
  exports: [
    TimelineListComponent
  ]
})
export class TimelineModule { }
