import { ReconciliationComponent } from './reconciliation/reconciliation.component';

import { LooseChangeComponent } from './loose-change/loose-change.component';
import { TerminalsComponent } from './terminals.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path:'', component:TerminalsComponent
  },
  {
    path:'loose', component:LooseChangeComponent
  },
  {
    path:'reconcile', component:ReconciliationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TerminalsRoutingModule { }
