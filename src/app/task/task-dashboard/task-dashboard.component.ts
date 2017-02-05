import { Component, OnInit } from '@angular/core';
import { Task, TaskService } from './../../core/core.module';

@Component({
  selector: 'app-task-dashboard',
  templateUrl: './task-dashboard.component.html',
  styleUrls: ['./task-dashboard.component.scss']
})
export class TaskDashboardComponent implements OnInit {
  tasks$;

  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.updateTaskList();
  }

  taskReceived(task){
    this.taskService.upsert(task).subscribe(r => {
      this.updateTaskList();
    });
  }

  updateTaskList(){
    this.tasks$ = this.getTasks();
  }

  deleteTask(task: Task) {
    this.tasks$ = this.taskService.remove(task).switchMap(_ => this.getTasks());
  }

  getTasks(){
    return this.taskService.getTasks().map(tasks => tasks.sort((a, b) => a.tag > b.tag ? +1 : -1));
  }
}
