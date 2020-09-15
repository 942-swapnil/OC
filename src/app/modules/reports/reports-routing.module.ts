import { TransSummaryComponent } from './trans-summary/trans-summary.component';
import { ReportsComponent } from './reports/reports.component';
import { TransactionComponent } from './transaction/transaction.component';
import { CashFlowComponent } from '../reports/cash-flow/cash-flow.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [

  {
    path:'', component: ReportsComponent, children:[
      {
        path:'cash', component:CashFlowComponent
      },
      {
        path:'transaction', component:TransactionComponent
      },
      {
        path:'trans-summary', component:TransSummaryComponent
      }
    ]
  }
  // {
  //   path:'cash', component:CashFlowComponent
  // },
  // {
  //   path:'transaction', component:TransactionComponent
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportsRoutingModule { }
