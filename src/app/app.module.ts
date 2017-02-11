import { SharedModule } from './shared/shared.module';
import { TimelineModule } from './timeline/timeline.module';
import { CoreModule } from './core/core.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { TaskModule } from './task/task.module';
import { MaterialModule } from '@angular/material';
import { MinimongoModule } from './minimongo/minimongo.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    HttpModule,
    CoreModule,
    TaskModule,
    TimelineModule,
    MinimongoModule.forRoot({ namespace: 'mm' }),
    MaterialModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
