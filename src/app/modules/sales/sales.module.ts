

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppointmentsComponent } from './appointments/appointments.component';
import { SalesListComponent } from './sales-list/sales-list.component';

import { SalesHeaderComponent } from './sales-header/sales-header.component';
import { SalesRoutingModule } from './sales-routing.module';
import { SalesComponent } from './sales.component';
import { MaterialModule } from 'src/app/shared/material-module/material-module.module';

@NgModule({
  declarations: [
    AppointmentsComponent, 
    SalesListComponent,
 
     SalesHeaderComponent,
     SalesComponent
    ],
  imports: [
    CommonModule,
    SalesRoutingModule,
    MaterialModule
  ],
  providers: []
})
export class SalesModule { }
