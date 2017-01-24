import { Component, OnInit } from '@angular/core';
import { TaskService } from './../../core/core.module';

@Component({
  selector: 'app-task-dashboard',
  templateUrl: './task-dashboard.component.html',
  styleUrls: ['./task-dashboard.component.scss']
})
export class TaskDashboardComponent implements OnInit {
  tasks$;

  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.tasks$ = this.taskService.getTasks();
  }

  taskReceived(task){
    console.log('received ' + JSON.stringify(task));
    this.taskService.upsert(task).subscribe(r => {
      console.log('task saved');
      this.tasks$ = this.taskService.getTasks();
    });
  }
}
