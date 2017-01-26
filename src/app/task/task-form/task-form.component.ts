import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss']
})
export class TaskFormComponent implements OnInit {
  @Output('taskSubmitted') submitTaskEvent = new EventEmitter();

  outerScore: number = 2;

  constructor() { }

  ngOnInit() {
  }
  
}
