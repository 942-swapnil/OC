import { MaterialModule } from 'src/app/shared/material-module/material-module.module';
// import { CashFlowComponent } from './../terminals/cash-flow/cash-flow.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportsRoutingModule } from './reports-routing.module';
import { ReportsComponent } from './reports/reports.component';
import { CashFlowComponent } from './cash-flow/cash-flow.component';
import { TransactionComponent } from './transaction/transaction.component';
import { AddTransactionComponent } from './add-transaction/add-transaction.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { TransSummaryComponent } from './trans-summary/trans-summary.component';


@NgModule({
  declarations: [ReportsComponent, CashFlowComponent, TransactionComponent, AddTransactionComponent, TransSummaryComponent],
  imports: [
    CommonModule,
    ReportsRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ReportsModule { }
