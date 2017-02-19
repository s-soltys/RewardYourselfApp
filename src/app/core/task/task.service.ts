import { Minimongo } from 'angular2-minimongo';
import { Task } from './task';
import { Injectable, Inject } from '@angular/core';
import { Observable, Subscriber } from 'rxjs/Rx';

@Injectable()
export class TaskService {
  tasksCollection = this.minimongo.getCollection<Task>('tasks');

  constructor(private minimongo: Minimongo) {

  }

  getTasks() {
    return this.tasksCollection.find({});
  }

  upsert(task) {
    return this.tasksCollection.upsert(task);
  }

  remove(task: Task) {
    return this.tasksCollection.remove(task._id);
  }
}
