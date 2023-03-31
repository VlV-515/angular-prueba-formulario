import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HijoComponent } from './Components/hijo/hijo.component';
import { Hijo2Component } from './Components/hijo2/hijo2.component';

@NgModule({
  declarations: [AppComponent, HijoComponent, Hijo2Component],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
