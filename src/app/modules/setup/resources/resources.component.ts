import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.scss']
})
export class ResourcesComponent implements OnInit {
  aaa: boolean=false;

  constructor() { }

  ngOnInit(): void {
  }
  show(){
    this.aaa=!this.aaa;
  }
}
