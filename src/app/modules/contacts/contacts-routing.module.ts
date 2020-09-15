import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactsComponent } from './contacts.component';
import { AddContactComponent } from './add-contact/add-contact.component';


const routes: Routes = [
  {path:'' , component: ContactsComponent},
  {path: 'add' , component: AddContactComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactsRoutingModule { }
