import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppointmentsRoutingModule } from './appointments-routing.module';
import { NewAppointmentComponent } from './new-appointment/new-appointment.component';



@NgModule({
  declarations: [ NewAppointmentComponent],
  imports: [
    CommonModule,
    AppointmentsRoutingModule
  ]
})
export class AppointmentsModule { }
