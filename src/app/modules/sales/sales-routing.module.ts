import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SalesComponent } from './sales.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { SalesListComponent } from './sales-list/sales-list.component';

import { SalesHeaderComponent } from './sales-header/sales-header.component';


const routes: Routes = [
  {
    path: "", component: SalesHeaderComponent, children: [
      { path: '', component: SalesComponent },
      { path: 'appointments-list', component: AppointmentsComponent },
      { path: 'sales-list', component: SalesListComponent },

    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalesRoutingModule { }
