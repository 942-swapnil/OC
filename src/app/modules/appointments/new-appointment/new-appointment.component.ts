import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-appointment',
  templateUrl: './new-appointment.component.html',
  styleUrls: ['./new-appointment.component.scss']
})
export class NewAppointmentComponent implements OnInit {
  appmod: boolean=false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  newappmodal(){
    this.appmod=!this.appmod;
  }
  gotoCalender() {
    this.router.navigate(['/calender']);
    return false;
  }
}
