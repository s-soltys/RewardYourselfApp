import { FlyInFromBottomAnimation } from './../animations/fly-from-bottom.animation';
import { TaskListComponent } from './../task-list/task-list.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Task, TaskService } from './../../core/core.module';

@Component({
  selector: 'app-task-dashboard',
  templateUrl: './task-dashboard.component.html',
  styleUrls: ['./task-dashboard.component.scss'],
  animations: [FlyInFromBottomAnimation(500)]
})
export class TaskDashboardComponent implements OnInit {
  @ViewChild(TaskListComponent) taskList: TaskListComponent;
  
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
