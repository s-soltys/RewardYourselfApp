import { TaskService } from './../../core/core.module';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timeline-list',
  templateUrl: './timeline-list.component.html',
  styleUrls: ['./timeline-list.component.scss']
})
export class TimelineListComponent implements OnInit {
  tasks$ = this.taskService.getTasks();

  constructor(private taskService: TaskService) {
    
  }

  ngOnInit() {
  }

}
