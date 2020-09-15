import { MaterialModule } from 'src/app/shared/material-module/material-module.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { SetupRoutingModule } from './setup-routing.module';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { LocationsComponent } from './locations/locations.component';
import { ResourcesComponent } from './resources/resources.component';

import { InvoicesTemplateComponent } from './invoices-template/invoices-template.component';
import { InvoiceSequencingComponent } from './invoice-sequencing/invoice-sequencing.component';
import { TaxesComponent } from './taxes/taxes.component';
import { PaymentTypesComponent } from './payment-types/payment-types.component';
import { DiscountTypesComponent } from './discount-types/discount-types.component';
import { SalesSettingsComponent } from './sales-settings/sales-settings.component';
import { CancellationReasonsComponent } from './cancellation-reasons/cancellation-reasons.component';
import { ClientNotificationsComponent } from './client-notifications/client-notifications.component';
import { ReferralSourcesComponent } from './referral-sources/referral-sources.component';
import { SetupComponent } from './setup.component';

 



@NgModule({
  declarations: [AccountSettingsComponent, LocationsComponent, ResourcesComponent,  InvoicesTemplateComponent, InvoiceSequencingComponent, TaxesComponent, PaymentTypesComponent, DiscountTypesComponent, SalesSettingsComponent, CancellationReasonsComponent, ClientNotificationsComponent, ReferralSourcesComponent,SetupComponent],
  imports: [
    CommonModule,
    RouterModule,
    SetupRoutingModule,  
    MaterialModule
  ]
})
export class SetupModule { }
