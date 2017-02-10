import { DiscardCardAnimation } from './../animations/discard-card.animation';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
  animations: [DiscardCardAnimation()]
})
export class TaskListComponent implements OnInit {
  @Input('tasks') tasks;
  @Output('onDeleted') deleteTask = new EventEmitter();

  constructor() { }

  ngOnInit() {
    
  }

  remove(task){
    task.deleted = 'void';
    setTimeout(() => {
      this.deleteTask.emit(task);
    }, 500);
  }

}
