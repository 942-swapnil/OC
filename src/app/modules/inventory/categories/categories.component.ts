import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  display: boolean=false;

  constructor() { }

  ngOnInit(): void {
  }
  funda(){
    this.display=!this.display;
  }

}
