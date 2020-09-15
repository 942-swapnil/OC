import { CancellationReasonsComponent } from './cancellation-reasons/cancellation-reasons.component';
import { ReferralSourcesComponent } from './referral-sources/referral-sources.component';
import { ResourcesComponent } from './resources/resources.component';
import { LocationsComponent } from './locations/locations.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { SetupComponent } from './setup.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InvoicesTemplateComponent } from './invoices-template/invoices-template.component';
import { InvoiceSequencingComponent } from './invoice-sequencing/invoice-sequencing.component';
import { TaxesComponent } from './taxes/taxes.component';
import { PaymentTypesComponent } from './payment-types/payment-types.component';
import { DiscountTypesComponent } from './discount-types/discount-types.component';
import { SalesSettingsComponent } from './sales-settings/sales-settings.component';
import { ClientNotificationsComponent } from './client-notifications/client-notifications.component';




const routes: Routes = [
  {path:'', component: SetupComponent},
  {path:'account-settings', component:AccountSettingsComponent},
  {path:'locations', component:LocationsComponent},
  {path:'resources', component:ResourcesComponent},
  {path:'invoices', component:InvoicesTemplateComponent},
  {path:'invoice-sequencing', component:InvoiceSequencingComponent},
  {path:'taxes', component:TaxesComponent},
  {path:'payment-types', component:PaymentTypesComponent},
  {path:'discount-types', component:DiscountTypesComponent},
  {path:'sales-settings', component:SalesSettingsComponent},
  { path:'referral-sources', component:ReferralSourcesComponent},
  { path:'client-notification', component:ClientNotificationsComponent},
  { path:'cancellation-reasons',component:CancellationReasonsComponent},
  {path:'discount-types', component:DiscountTypesComponent}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SetupRoutingModule { }
