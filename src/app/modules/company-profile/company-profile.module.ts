import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/shared/material-module/material-module.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyProfileRoutingModule } from './company-profile-routing.module';
import { CompanyProfileComponent } from './company-profile.component';


@NgModule({
  declarations: [ CompanyProfileComponent],
  imports: [
    CommonModule,
    CompanyProfileRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class CompanyProfileModule { }
