import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScoreSelectorComponent } from './score-selector/score-selector.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ScoreSelectorComponent
  ],
  exports: [
    ScoreSelectorComponent
  ]
})
export class UtilModule { }
