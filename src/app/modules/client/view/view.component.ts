import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  drp: boolean=false;
  change1: boolean=true;
  change2: boolean=false;
  change3: boolean=false;

  constructor() { }

  ngOnInit(): void {
  }
drpdn(){
  this.drp=!this.drp;
}
Appointments(){
  this.change1=true;
  this.change2=false;
  this.change3=false;
}
Products(){
  this.change2=true;
  this.change3=false;
  this.change1=false;
}
Invoices(){
  this.change3=true;
  this.change2=false;
  this.change1=false;
  
  
}
}
