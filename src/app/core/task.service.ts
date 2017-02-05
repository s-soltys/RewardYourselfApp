import { MinimongoService } from './minimongo.service';
import { Task } from './task';
import { Injectable, Inject } from '@angular/core';
import { Observable, Subscriber } from 'rxjs/Rx';

@Injectable()
export class TaskService {

  constructor(private minimongo: MinimongoService) {
    
  }

  getTasks() {
    return new Observable<Task[]>((subscriber: Subscriber<Task[]>) => {
      this.minimongo.tasks.find({}).fetch(results => {
        subscriber.next(results);
      });
    });
  }

  upsert(task) {
    return new Observable<Task>((subscriber: Subscriber<Task>) => {
      this.minimongo.tasks.upsert(task, (responseTask: Task) => {
          subscriber.next(responseTask);
      });
    });
  }

  remove(task: Task){
    return new Observable<string>((subscriber: Subscriber<string>) => {
      this.minimongo.tasks.remove(task._id, result => {
          subscriber.next(task._id);
      });
    });
  }
}
