import { MinimongoCollection, MinimongoReference } from './../../minimongo/minimongo.module';
import { Task } from './task';
import { Injectable, Inject } from '@angular/core';
import { Observable, Subscriber } from 'rxjs/Rx';

@Injectable()
export class TaskService {
  tasks = this.minimongo.getCollection<Task>('tasks');

  constructor(private minimongo: MinimongoReference) {
    
  }

  getTasks() {
    return new Observable<Task[]>((subscriber: Subscriber<Task[]>) => {
      this.tasks.find({}).fetch(tasks => {
        subscriber.next(tasks);
      });
    });
  }

  upsert(task) {
    return new Observable<Task>((subscriber: Subscriber<Task>) => {
      this.tasks.upsert(task, responseTask => {
          subscriber.next(responseTask);
      });
    });
  }

  remove(task: Task){
    return new Observable<string>((subscriber: Subscriber<string>) => {
      this.tasks.remove(task._id, () => {
          subscriber.next(task._id);
      });
    });
  }
}
