import { Component, OnInit } from '@angular/core';
import timeGridPlugin from '@fullcalendar/timegrid';
import { Router } from '@angular/router';

@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.scss']
})
export class CalenderComponent implements OnInit {
  calendarPlugins = [timeGridPlugin]; // important!
  selmod: boolean=false;

  constructor(private router: Router) { }

  ngOnInit(): void {

  }
  selectmodal(){
    this.selmod=!this.selmod;
  }
  gotoAppointment() {
    this.router.navigate(['/appointments/new']);
    return false;
  }
  
  gotoBlockedTime() {
    this.router.navigate(['/new-blocked-time']);
  }
 

}
