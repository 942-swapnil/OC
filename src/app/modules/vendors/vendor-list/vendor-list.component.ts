import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vendor-list',
  templateUrl: './vendor-list.component.html',
  styleUrls: ['./vendor-list.component.scss']
})
export class VendorListComponent implements OnInit {
  modls: boolean =false;

  constructor() { }

  ngOnInit(): void {
  }


  modals(){
    this.modls= !this.modls;
  }

}
