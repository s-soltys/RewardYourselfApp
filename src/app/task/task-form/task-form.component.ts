import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss']
})
export class TaskFormComponent implements OnInit {
  @Output('taskSubmitted') taskEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  submit(task) {
    this.taskEvent.emit(task);
  }
}
