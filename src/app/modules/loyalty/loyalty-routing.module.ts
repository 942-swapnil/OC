import { VouchersComponent } from './vouchers/vouchers.component';


import { PackagesComponent } from './packages/packages.component';
import { OffersComponent } from './offers/offers.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoyaltyComponent } from './loyalty.component';
import { MembershipComponent } from './membership/membership.component';

;


const routes: Routes = [
{ path:'' , component: LoyaltyComponent , children:[
  { path:'membership' , component: MembershipComponent},
  { path: 'offers', component :OffersComponent},
  { path:'packages', component:PackagesComponent},
  { path : 'vouchers', component: VouchersComponent}
  
] }
]; 

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoyaltyRoutingModule { }
