import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/shared/material-module/material-module.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OutletRoutingModule } from './outlet-routing.module';
import { OutletComponent } from './outlet.component';


@NgModule({
  declarations: [ OutletComponent],
  imports: [
    CommonModule,
    OutletRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class OutletModule { }
