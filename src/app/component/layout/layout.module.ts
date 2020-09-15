 import { NgModule } from '@angular/core';
 import { CommonModule } from '@angular/common';
import { layoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout/layout.component';

@NgModule({
  imports: [
    CommonModule,
    layoutRoutingModule
  ],
  exports: [
    LayoutComponent
  ],
  declarations : [
    LayoutComponent
  ]
})
export class layoutModule {}