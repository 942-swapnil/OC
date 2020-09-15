import { MaterialModule } from 'src/app/shared/material-module/material-module.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { ClientComponent } from './client.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import {NgxPaginationModule} from 'ngx-pagination'

import {FormsModule , ReactiveFormsModule} from '@angular/forms';
import { AddDialogBoxComponent } from './add-dialog-box/add-dialog-box.component';


@NgModule({
  declarations: [ClientComponent, AddComponent, ViewComponent, AddDialogBoxComponent],
  imports: [
    CommonModule,
    ClientRoutingModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    PaginationModule.forRoot()
  ]
})
export class ClientModule { }
