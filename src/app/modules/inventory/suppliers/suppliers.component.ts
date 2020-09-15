import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-suppliers',
  templateUrl: './suppliers.component.html',
  styleUrls: ['./suppliers.component.scss']
})
export class SuppliersComponent implements OnInit {
  display: boolean=false;

  constructor() { }

  ngOnInit(): void {
  }
  funda(){
    this.display=!this.display;
  }
}
