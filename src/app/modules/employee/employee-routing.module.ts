import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './employee.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { LeaveComponent } from './leave/leave.component';
import { HolidaysComponent } from './holidays/holidays.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';


const routes: Routes = [{path:'',component:EmployeeComponent,children:[
{path:'', component: EmployeeListComponent },
{path:'Attendance',component:AttendanceComponent},
{path:'Leave',component:LeaveComponent},
{path:'Holiday',component:HolidaysComponent},
]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
