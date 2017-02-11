import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScoreSelectorComponent } from './score-selector/score-selector.component';
import { MaterialModule } from '@angular/material';
import { StretchHeightDirective } from './stretch-height.directive';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [
    ScoreSelectorComponent,
    StretchHeightDirective
  ],
  exports: [
    ScoreSelectorComponent,
    StretchHeightDirective
  ]
})
export class UtilModule { }
