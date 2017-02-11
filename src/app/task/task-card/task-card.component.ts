import { DiscardCardAnimation } from './../animations/discard-card.animation';
import { Component, OnInit, Input, Output, EventEmitter, HostBinding } from '@angular/core';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.scss'],
  animations: [DiscardCardAnimation()]
})
export class TaskCardComponent implements OnInit {
  @HostBinding('@discardCard') routeAnimation = 'show';
  @Input() task;
  @Output() delete = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  remove(task){
    this.routeAnimation = 'void';
    this.delete.emit(task);
  }

}