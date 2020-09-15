import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-referral-sources',
  templateUrl: './referral-sources.component.html',
  styleUrls: ['./referral-sources.component.scss']
})
export class ReferralSourcesComponent implements OnInit {
  pal: boolean=false;
  sur: boolean=false;

  constructor() { }

  ngOnInit(): void {
  }
  swap(){
    this.pal=!this.pal;
  }
sw(){
  this.sur=!this.sur;
}
}
