
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/shared/material-module/material-module.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoyaltyRoutingModule } from './loyalty-routing.module';
import { LoyaltyComponent } from './loyalty.component';
import { MembershipComponent } from './membership/membership.component';
import { OffersComponent } from './offers/offers.component';
import { PackagesComponent } from './packages/packages.component';
import { VouchersComponent } from './vouchers/vouchers.component';
import { AddMembershipComponent } from './membership/add-membership/add-membership.component';
import { AddOffersComponent } from './offers/add-offers/add-offers.component';
import { AddVouchersComponent } from './vouchers/add-vouchers/add-vouchers.component';
import { AddPackageComponent } from './packages/add-package/add-package.component';



@NgModule({
  declarations: [LoyaltyComponent, MembershipComponent, OffersComponent, PackagesComponent, VouchersComponent, AddMembershipComponent, AddOffersComponent, AddVouchersComponent, AddPackageComponent],
  imports: [
    CommonModule,
    LoyaltyRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class LoyaltyModule { }
