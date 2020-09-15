import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-taxes',
  templateUrl: './taxes.component.html',
  styleUrls: ['./taxes.component.scss']
})
export class TaxesComponent implements OnInit {
  dakh: boolean=false;
  adad: boolean=false;
  disp: boolean=false;
  kals: boolean=false;

  constructor() { }

  ngOnInit(): void {
  }
  showopen(){
    this.dakh=!this.dakh;
    this.adad=false;
    this.disp=false;
  }
  dada(){
    this.adad=!this.adad;
    this.dakh=false;
    this.disp=false;

  }
  droup(){
    this.disp=!this.disp;
  }
  kal(){
    this.kals=!this.kals;
    
  }

}
