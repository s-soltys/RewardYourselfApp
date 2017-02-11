import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { TimelineListComponent } from './timeline-list/timeline-list.component';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [TimelineListComponent],
  exports: [
    TimelineListComponent
  ]
})
export class TimelineModule { }
