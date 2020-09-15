import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cancellation-reasons',
  templateUrl: './cancellation-reasons.component.html',
  styleUrls: ['./cancellation-reasons.component.scss']
})
export class CancellationReasonsComponent implements OnInit {
  mud: boolean=false;
  display: boolean=false;
  display1: boolean=false;

  constructor() { }

  ngOnInit(): void {
  }
  dum(){
    this.mud=!this.mud
  }
  disp(){
    this.display=!this.display;
  }
  disp1(){
    this.display1=!this.display1;
  }
}
