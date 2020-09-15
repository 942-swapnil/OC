import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InventoryComponent } from './inventory.component';
import { ProductsComponent } from './products/products.component';
import { OrdersComponent } from './orders/orders.component';

import { CategoriesComponent } from './categories/categories.component';
import { SuppliersComponent } from './suppliers/suppliers.component';


const routes: Routes = [
  { path: '',   component:InventoryComponent },
  // {path:'' ,component:InventoryComponent},
  {path:'products', component:ProductsComponent},
  {path:'orders' ,component:OrdersComponent},
  
  {path:'categories', component:CategoriesComponent},
  {path:'suppliers',component:SuppliersComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventoryRoutingModule { }
