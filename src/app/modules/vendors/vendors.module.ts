import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VendorsRoutingModule } from './vendors-routing.module';
import { VendorsComponent } from './vendors.component';
import { VendorListComponent } from './vendor-list/vendor-list.component';


@NgModule({
  declarations: [ VendorsComponent, VendorListComponent],
  imports: [
    CommonModule,
    VendorsRoutingModule
  ]
})
export class VendorsModule { }
