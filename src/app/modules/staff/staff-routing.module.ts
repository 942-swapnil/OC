
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StaffComponent } from './staff.component';
import { ClosedDatesComponent } from './closed-dates/closed-dates.component';
import { EmployeesComponent } from './employees/employees.component';
import { PermissionsComponent } from './permissions/permissions.component';
import { StaffHomeComponent } from './staff-home/staff-home.component';
import { AttenadanceFormComponent } from './attenadance-form/attenadance-form.component';


const routes: Routes = [
  {
    path: "", component: StaffHomeComponent, children: [
      { path: '', component: EmployeesComponent },
      { path: 'hours', component: StaffComponent },
      { path: 'closed-dates', component: ClosedDatesComponent },
      { path: 'permissions', component: PermissionsComponent },
      { path: 'Attendance' , component: AttenadanceFormComponent}
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StaffRoutingModule { }
