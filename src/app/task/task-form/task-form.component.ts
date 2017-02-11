import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss']
})
export class TaskFormComponent implements OnInit {
  @Output('taskSubmitted') submitTaskEvent = new EventEmitter();

  options = [1, 2, 3, 5, 10];

  constructor() { }

  ngOnInit() {
  }

  submit(taskForm){
    this.submitTaskEvent.emit(taskForm.value);
    taskForm.reset();
  }
  
}
