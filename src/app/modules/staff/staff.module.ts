import { MaterialModule } from 'src/app/shared/material-module/material-module.module';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule }  from '@angular/forms';
import { StaffRoutingModule } from './staff-routing.module';
import { ClosedDatesComponent } from './closed-dates/closed-dates.component';
import { EmployeesComponent } from './employees/employees.component';
import { PermissionsComponent } from './permissions/permissions.component';
import { StaffHomeComponent } from './staff-home/staff-home.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { DialogBoxComponent } from './dialog-box/dialog-box.component';
import { AttenadanceFormComponent } from './attenadance-form/attenadance-form.component'

@NgModule({
  declarations: [
    ClosedDatesComponent,
    EmployeesComponent,
    PermissionsComponent,
    StaffHomeComponent,
    DialogBoxComponent,
    AttenadanceFormComponent
  ],
  imports: [
    CommonModule,
    StaffRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    
  ]
})
export class StaffModule { }
