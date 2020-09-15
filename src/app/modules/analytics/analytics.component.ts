import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.scss']
})
export class AnalyticsComponent implements OnInit {
  show: boolean=false;

  constructor() { }

  ngOnInit(): void {
  }
slide(){
  this.show=!this.show;
}
}
