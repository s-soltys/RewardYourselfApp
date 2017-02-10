import { CoreModule } from './core/core.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { TaskModule } from './task/task.module';
import { MaterialModule } from '@angular/material';
import { MinimongoModule, MinimongoConfig } from './minimongo/minimongo.module';

import { AppComponent } from './app.component';

const minimongo = MinimongoModule.forRoot({
  namespace: 'mm',
  collections: ['tasks']
});

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CoreModule,
    TaskModule,
    minimongo,
    MaterialModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
