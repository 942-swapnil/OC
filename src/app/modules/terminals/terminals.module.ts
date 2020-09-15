import { MaterialModule } from './../../shared/material-module/material-module.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TerminalsRoutingModule } from './terminals-routing.module';
import { TerminalsComponent } from './terminals.component';
import { AddTerminalsComponent } from './add-terminals/add-terminals.component';
import { ReconciliationComponent } from './reconciliation/reconciliation.component';
import { LooseChangeComponent } from './loose-change/loose-change.component';

@NgModule({
  declarations: [TerminalsComponent, AddTerminalsComponent, ReconciliationComponent, LooseChangeComponent],
  imports: [
    CommonModule,
    TerminalsRoutingModule,
    MaterialModule
  ]
})
export class TerminalsModule { }
