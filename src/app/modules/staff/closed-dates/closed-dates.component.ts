import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-closed-dates',
  templateUrl: './closed-dates.component.html',
  styleUrls: ['./closed-dates.component.scss']
})
export class ClosedDatesComponent implements OnInit {
  sn: boolean=false;
  dal: boolean=false;

  constructor() { }

  ngOnInit(): void {
  }

  sin(){
    this.sn = !this.sn;
  }
 modal2(){
   this.dal=!this.dal;
 }
}
