import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.scss']
})
export class AppointmentsComponent implements OnInit {
  filtopn: boolean=false;
  drpdwn: boolean=false;

  constructor() { }

  ngOnInit(): void {
  }
filterOpn(){
  this.filtopn=!this.filtopn;
}
opnDropdwn(){
  this.drpdwn=!this.drpdwn;
}
}
