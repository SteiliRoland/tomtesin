/*
* File: app.component.ts
* Author: Steili Roland
* Copyright: 2022,Steili Roland
* Group: Szoft II/N
* Date: 2022-01-13
* Github: https://github.com/SteiliRoland/tomtesin
* Licenc: GNU GPL
*/
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tomtesin';
  tomeg:number;
  magassag:number;
  testtomegindex:number;
  constructor(){
  this.tomeg=0;
  this.magassag=0;
  this.testtomegindex=0;
  }

  onClickSzamit(){
    this.testtomegindex= this.tomeg / Math.pow(this.magassag,2);
    
    
  }
}
