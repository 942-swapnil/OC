import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  tital='Home';
  toggle: boolean=true;

  constructor() { }

  ngOnInit(): void {
  }

  fun(){
    this.toggle=!this.toggle;
  }
}
