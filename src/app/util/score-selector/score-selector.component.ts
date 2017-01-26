import { Component, OnInit, Input, Output, EventEmitter, trigger, state, style, transition, animate } from '@angular/core';

function createScaleAnim(tag: string, showTime: number, hideTime: number) {
  return trigger('anim', [
    state("void", style({ transform: 'scale(0)' })),
    state("enter", style({ transform: 'scale(1)' })),
    transition('enter => void', animate(hideTime)),
    transition('void => enter', animate(showTime))
]);
}

let anim = createScaleAnim('anim', 250, 0);

@Component({
  selector: 'app-score-selector',
  templateUrl: './score-selector.component.html',
  styleUrls: ['./score-selector.component.scss'],
  animations: [anim]
})
export class ScoreSelectorComponent implements OnInit {
  @Input() options = [1, 2, 3, 5];
  @Input() score: number;
  @Output() scoreChange = new EventEmitter<number>();

  constructor() {
    
  }

  ngOnInit() {
    
  }

  setScore(newScore: number) {
    this.score = newScore;
    this.scoreChange.emit(newScore);
  }

}
