import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VendorsComponent } from './vendors.component';
import { VendorListComponent } from './vendor-list/vendor-list.component';


const routes: Routes = [
  {
    path:'' , component:VendorsComponent, children:[
      { path: '' , component : VendorListComponent },
     
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VendorsRoutingModule { }
