import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppointmentsComponent } from './appointments.component';
import { NewAppointmentComponent } from './new-appointment/new-appointment.component';




const routes: Routes = [
  {
    path:'',component:AppointmentsComponent,
    children:[
     { path:'new',component:NewAppointmentComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppointmentsRoutingModule { }
