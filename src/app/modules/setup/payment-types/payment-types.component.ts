import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment-types',
  templateUrl: './payment-types.component.html',
  styleUrls: ['./payment-types.component.scss']
})
export class PaymentTypesComponent implements OnInit {
  do: boolean=false;
  shows1: boolean=false;
  shows2: boolean=false;

  constructor() { }

  ngOnInit(): void {
  }
  funa(){
    this.do=!this.do;
    this.shows1=false;
    this.shows2=false;
  }

  show1(){
    this.shows1=!this.shows1;
    this.shows2=false;
    this.do=false;
  }
  show2(){
    this.shows2=!this.shows2;
    this.shows1=false;
    this.do=false;
  }

}
