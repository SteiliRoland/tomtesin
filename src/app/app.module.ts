/*
* File: app.modudele.ts
* Author: Steili Roland
* Copyright: 2022,Steili Roland
* Group: Szoft II/N
* Date: 2022-01-13
* Github: https://github.com/SteiliRoland/tomtesin
* Licenc: GNU GPL
*/
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
