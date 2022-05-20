import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgxJs9Module } from 'ngx-js9';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, NgxJs9Module],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
