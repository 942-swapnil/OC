import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeComponent } from './employee.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { LeaveComponent } from './leave/leave.component';
import { HolidaysComponent } from './holidays/holidays.component';
import { MaterialModule } from 'src/app/shared/material-module/material-module.module';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { AddholidayComponent } from './holidays/addholiday/addholiday.component';
import { AddAttendanceComponent } from './attendance/add-attendance/add-attendance.component';


@NgModule({
  declarations: [EmployeeComponent, AttendanceComponent, LeaveComponent, HolidaysComponent, EmployeeListComponent, AddholidayComponent, AddAttendanceComponent],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    MaterialModule
  ]
})
export class EmployeeModule { }
