import { MaterialModule } from './../../shared/material-module/material-module.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StationsRoutingModule } from './stations-routing.module';
import { StationsComponent } from './stations.component';
import { AddStationComponent } from './add-station/add-station.component';
import { MatDialog } from '@angular/material/dialog';


@NgModule({
  declarations: [StationsComponent, AddStationComponent],
  imports: [
    CommonModule,
    StationsRoutingModule,
    MaterialModule
  ]
})
export class StationsModule {
  searchText:any;


  constructor(public dialog: MatDialog){}

  openDialog() {
    const dialogRef = this.dialog.open(AddStationComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
