import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/shared/material-module/material-module.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InventoryRoutingModule } from './inventory-routing.module';
import { ProductsComponent } from './products/products.component';
import { OrdersComponent } from './orders/orders.component';

import { CategoriesComponent } from './categories/categories.component';
import { SuppliersComponent } from './suppliers/suppliers.component';
import { AddProductComponent } from './products/add-product/add-product.component';


@NgModule({
  declarations: [ProductsComponent, OrdersComponent, CategoriesComponent, SuppliersComponent, AddProductComponent],
  imports: [
    CommonModule,
    InventoryRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class InventoryModule { }
