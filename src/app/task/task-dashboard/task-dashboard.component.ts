import { FadeAnimation } from './../animations/fade.animation';
import { FlyInFromBottomAnimation } from './../animations/fly-from-bottom.animation';
import { TaskListComponent } from './../task-list/task-list.component';
import { Component, OnInit, ViewChild, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Task, TaskService } from './../../core/core.module';

@Component({
  selector: 'app-task-dashboard',
  templateUrl: './task-dashboard.component.html',
  styleUrls: ['./task-dashboard.component.scss'],
  animations: [
    FlyInFromBottomAnimation(500),
    FadeAnimation(0.5)
  ]
})
export class TaskDashboardComponent implements OnInit {
  @ViewChild(TaskListComponent) taskList: TaskListComponent;
  tasks$ = this.getTasks();
  refreshTasks = new EventEmitter<void>();
  formSwitch = 'void';

  constructor(private taskService: TaskService) { }

  ngOnInit() {
  }

  taskReceived(task){
    this.taskService.upsert(task).subscribe(r => {
      this.formSwitch = 'void';
      this.refreshTasks.emit();
    });
  }

  toggleForm(){
    this.formSwitch = (this.formSwitch === 'void') ? 'show' : 'void';
  }

  deleteTask(task: Task) {
    this.taskService.remove(task).subscribe(_ => {
      this.refreshTasks.emit();
    });
  }

  getTasks(){
    return this.taskService
      .getTasks()
      .delay(0)
      .repeatWhen(_ => this.refreshTasks)
      .map(tasks => tasks.sort((a, b) => b.score - a.score))
      .share();
  }
}
