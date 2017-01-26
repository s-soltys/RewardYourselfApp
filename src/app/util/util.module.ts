import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScoreSelectorComponent } from './score-selector/score-selector.component';
import { MaterialModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule.forRoot()
  ],
  declarations: [
    ScoreSelectorComponent
  ],
  exports: [
    ScoreSelectorComponent
  ]
})
export class UtilModule { }
