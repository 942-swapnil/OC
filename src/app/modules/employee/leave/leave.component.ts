import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-leave',
  templateUrl: './leave.component.html',
  styleUrls: ['./leave.component.scss']
})
export class LeaveComponent implements OnInit {
  displayedColumns: string[] = ['name', 'leavetype', 'from', 'to','nodays','reason','status','action'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  constructor() { }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
  }

}

export interface PeriodicElement {
  name: string;
  leavetype: any;
  from: any;
  to: any;
  nodays:any;
  reason:any;
  status: any;
  action:any;
  


}

const ELEMENT_DATA: PeriodicElement[] = [
  {name: 'mike litorus', leavetype: 'Medical', from:'30/08/2020', to: '02/09/2020', nodays:'04', reason:'Going to Hospital',status:['Approved','Pending','Decline'], action:''},
  {name: 'sunit devdhar', leavetype: 'Hospitalisation', from:'29/08/2020', to: '29/08/2020', nodays:'01', reason:'Going to Hospital',status:['Approved','Pending','Decline'], action:''},
  {name: 'john pandey', leavetype: 'Medical', from:'28/08/2020', to: '28/08/2020', nodays:'01', reason:'Going to Hospital',status:['Approved','Pending','Decline'], action:''},
  {name: 'mady miles', leavetype: 'Casual Leave', from:'01/09/2020', to: '04/09/2020', nodays:'04', reason:'Personnal',status:['Approved','Pending','Decline'], action:''},
  
];