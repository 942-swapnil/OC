import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss']
})
export class LocationsComponent implements OnInit {
  sh: boolean=false;
  done: boolean=false;

  constructor() { }

  ngOnInit(): void {
  }
  func(){
    this.sh=!this.sh;
    this.done=false;
  }
  do(){
    this.done=!this.done;
    this.sh=false;
  }
}
