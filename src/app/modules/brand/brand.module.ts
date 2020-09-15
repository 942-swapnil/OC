import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './../../shared/material-module/material-module.module';


import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrandRoutingModule } from './brand-routing.module';
import { BrandComponent } from './brand.component';


@NgModule({
  declarations: [ BrandComponent],
  imports: [
    CommonModule,
    BrandRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class BrandModule { }
