import { MinimongoCollection, MinimongoReference } from './../minimongo/minimongo.module';
import { Task } from './task';
import { Injectable, Inject } from '@angular/core';
import { Observable, Subscriber } from 'rxjs/Rx';

@Injectable()
export class TaskService {
  tasks: MinimongoCollection<any>;

  constructor(private minimongo: MinimongoReference) {
    this.tasks = minimongo.getCollection('tasks');
  }

  getTasks() {
    return new Observable<Task[]>((subscriber: Subscriber<Task[]>) => {
      this.tasks.find({}).fetch(results => {
        subscriber.next(results);
      });
    });
  }

  upsert(task) {
    return new Observable<Task>((subscriber: Subscriber<Task>) => {
      this.tasks.upsert(task, (responseTask: Task) => {
          subscriber.next(responseTask);
      });
    });
  }

  remove(task: Task){
    return new Observable<string>((subscriber: Subscriber<string>) => {
      this.tasks.remove(task._id, result => {
          subscriber.next(task._id);
      });
    });
  }
}
