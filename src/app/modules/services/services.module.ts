import { MaterialModule } from 'src/app/shared/material-module/material-module.module';
// import { ServicesComponent } from './services.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule , ReactiveFormsModule} from '@angular/forms';
import { ServicesRoutingModule } from './services-routing.module';
import { OfferingTypeComponent } from './offering-type/offering-type.component';
import { ServiceComponent } from './service/service.component';
import { 
  MatCheckboxModule 
  } from '@angular/material/checkbox';
// ServicesComponent

@NgModule({
  declarations: [ OfferingTypeComponent , ServiceComponent ],
  imports: [
    CommonModule,
    ServicesRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    MatCheckboxModule
  ]
})
export class ServicesModule { }
