import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';

import { CalenderRoutingModule } from './calender-routing.module';
import { CalenderComponent } from './calender.component';
import { NewCalendarComponent } from './new-calendar/new-calendar.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { NewBlockedTimeComponent } from './new-blocked-time/new-blocked-time.component';
import { NgxSpinnerModule } from "ngx-spinner";
import { VerticalCalenderComponent } from './vertical-calender/vertical-calender.component';



@NgModule({
  declarations: [CalenderComponent, NewCalendarComponent, NewBlockedTimeComponent, VerticalCalenderComponent],
  imports: [
    CommonModule,
    FormsModule,
    CalenderRoutingModule,
    FullCalendarModule,
    NgxSpinnerModule
  
  ]
})
export class CalenderModule { }
