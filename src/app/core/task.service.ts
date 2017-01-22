import { Task } from './task';
import { Injectable, Inject } from '@angular/core';
import { Observable, Subscriber } from 'rxjs/Rx';

@Injectable()
export class TaskService {

  constructor( @Inject('minimongo') private db) {
    
  }

  getTasks() {
    return new Observable<Task[]>((subscriber: Subscriber<Task[]>) => {
      this.db.tasks.find({}).fetch(results => {
        subscriber.next(results);
      });
    });
  }
}
