import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScoreSelectorComponent } from './score-selector/score-selector.component';
import { MaterialModule } from '@angular/material';
import { StretchHeightContainerComponent } from './stretch-height-container/stretch-height-container.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule
  ],
  declarations: [
    ScoreSelectorComponent,
    StretchHeightContainerComponent
  ],
  exports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    ScoreSelectorComponent,
    StretchHeightContainerComponent
  ]
})
export class SharedModule {
  
}
