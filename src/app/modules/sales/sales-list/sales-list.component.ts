import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sales-list',
  templateUrl: './sales-list.component.html',
  styleUrls: ['./sales-list.component.scss']
})
export class SalesListComponent implements OnInit {
  filtopen: boolean=false;
  dropdown: boolean=false;
  
  constructor() { }

  ngOnInit(): void {
  }
  filterOpen(){
    this.filtopen=!this.filtopen;
  }
  opnDropdown(){
    this.dropdown=!this.dropdown;
  }
  
}
