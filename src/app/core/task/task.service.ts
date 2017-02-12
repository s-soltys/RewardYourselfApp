import { MinimongoCollection, MinimongoReference } from './../../minimongo/minimongo.module';
import { Task } from './task';
import { Injectable, Inject } from '@angular/core';
import { Observable, Subscriber } from 'rxjs/Rx';

@Injectable()
export class TaskService {
  tasksCollection = this.minimongo.getCollection<Task>('tasks');

  constructor(private minimongo: MinimongoReference) {

  }

  getTasks() {
    return new Observable<Task[]>((subscriber: Subscriber<Task[]>) => {
      this.tasksCollection.find({}).fetch(tasks => {
        subscriber.next(tasks);
        subscriber.complete();
      });
    });
  }

  upsert(task) {
    return new Observable<Task>((subscriber: Subscriber<Task>) => {
      this.tasksCollection.upsert(task, responseTask => {
        subscriber.next(responseTask);
        subscriber.complete();
      });
    });
  }

  remove(task: Task) {
    return new Observable<string>((subscriber: Subscriber<string>) => {
      this.tasksCollection.remove(task._id, () => {
        subscriber.next(task._id);
        subscriber.complete();
      });
    });
  }
}
