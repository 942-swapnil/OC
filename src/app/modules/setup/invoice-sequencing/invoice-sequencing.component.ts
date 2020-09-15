import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-invoice-sequencing',
  templateUrl: './invoice-sequencing.component.html',
  styleUrls: ['./invoice-sequencing.component.scss']
})
export class InvoiceSequencingComponent implements OnInit {
  express: boolean=false;

  constructor() { }

  ngOnInit(): void {
  }
  modal(){
    this.express=!this.express;
  }
}
