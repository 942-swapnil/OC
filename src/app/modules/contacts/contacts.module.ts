import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterialModule } from './../../shared/material-module/material-module.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactsRoutingModule } from './contacts-routing.module';
import { ContactsComponent } from './contacts.component';
import { AddContactComponent } from './add-contact/add-contact.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { MAT_SELECT_SCROLL_STRATEGY } from '@angular/material/select';
// import { SelectAutocompleteModule } from 'mat-select-autocomplete';


@NgModule({
  declarations: [ ContactsComponent, AddContactComponent, ContactFormComponent ],
  imports: [
    CommonModule,
    ContactsRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    // SelectAutocompleteModule
  ]

})
export class ContactsModule { }
