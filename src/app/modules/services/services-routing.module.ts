import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServicesComponent } from './services.component';
import { OfferingTypeComponent } from './offering-type/offering-type.component';
import { ServiceComponent } from './service/service.component';


const routes: Routes = [
  { path:'',component:ServicesComponent,

  children: [
    // { path: '', redirectTo: 'service', pathMatch: 'full' },
    { path:'service',component:ServiceComponent},
    { path: 'offering-type', component:OfferingTypeComponent }
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicesRoutingModule { }
