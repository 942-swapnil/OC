import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-discount-types',
  templateUrl: './discount-types.component.html',
  styleUrls: ['./discount-types.component.scss']
})
export class DiscountTypesComponent implements OnInit {
  done: boolean=false;

  constructor() { }

  ngOnInit(): void {
  }
  display(){
    this.done=!this.done;
  }
}
