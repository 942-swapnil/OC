import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewCalendarComponent } from './new-calendar/new-calendar.component';
import { VerticalCalenderComponent } from './vertical-calender/vertical-calender.component';


const routes: Routes = [
  {path: "", component: NewCalendarComponent ,
  // { path: '',   redirectTo: '/calender/calendar', pathMatch: 'full'},

   children :[

      { path:'horizantal', component: VerticalCalenderComponent  },

    // { path: '', redirectTo: 'service', pathMatch: 'full' },
    // {path : "calendar" ,   component : CalenderComponent},
    // { path:'calender',component: NewCalendarComponent} ,
    // { path: 'new-blocked-time',component:NewBlockedTimeComponent}
  ]
  },
  
  { path:'horizantal', component: VerticalCalenderComponent  }

 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CalenderRoutingModule { }
