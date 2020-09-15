import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  display1: boolean=false;
  display2: boolean=false;
  inside: boolean=false;
  addProduct: boolean=false;
  inside1: boolean=false;

  constructor() { }

  ngOnInit(): void {
  }
  funda1(){
    this.display1=!this.display1;
  }
  funda2(){
    this.display2=!this.display2;
  }
  insa(){
    this.inside=!this.inside;
    this.display1=false;
  }
  insa1(){
    this.inside1=!this.inside1;
    this.display1=false;
  }
  add1(){
    this.addProduct=!this.addProduct;
  }

}
