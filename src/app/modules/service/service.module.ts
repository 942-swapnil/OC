import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/shared/material-module/material-module.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiceRoutingModule } from './service-routing.module';
import { ServiceComponent } from './service.component';
import { AddServiceBoxComponent } from './add-service-box/add-service-box.component';


@NgModule({
  declarations: [ServiceComponent, AddServiceBoxComponent],
  imports: [
    CommonModule,
    ServiceRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ServiceModule { }
