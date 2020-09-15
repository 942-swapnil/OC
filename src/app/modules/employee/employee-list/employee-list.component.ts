import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  displayedColumns: string[] = ['name', 'employeeId', 'email', 'mobile','joindate','role','action'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  constructor() { }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
  }

}

export interface PeriodicElement {
  name: string;
  employeeId: any;
  email: any;
  mobile: any;
  joindate:any;
  role:any;
  action:any;
  


}

const ELEMENT_DATA: PeriodicElement[] = [
  {name: 'mike litorus', employeeId: 'xbdxgbxv1', email:'mike@gmail.com', mobile: 8888888888, joindate:'1/1/2020', role:'hairstylist', action:''},
  {name: 'sunit devdhar', employeeId: '2bfgv', email:'sunit@gmail.com', mobile: 8888888888, joindate:'1/1/2020', role:'hairstylist', action:''},
  {name: 'john pandey', employeeId: 'vfdvxv3', email:'john@gmil.com', mobile: 8888888888, joindate:'1/1/2020', role:'massager', action:''},
  {name: 'mady miles', employeeId: '4fgxv', email:'mady@gmail.com', mobile: 8888888888, joindate:'1/1/2020', role:'hairstylist', action:''},
  {name: 'john smith', employeeId: 'fgxgx5', email:'john12@gmail.com', mobile: 8888888888, joindate:'1/1/2020', role:'hairstylist', action:''},
  {name: 'sam deluna', employeeId: '6xcgfsg', email:'sam@gmail.com', mobile: 8888888888, joindate:'1/1/2020', role:'hairstylist', action:''},
  {name: 'sunny sharma', employeeId: '7fgsgsr', email:'sunny@gmail.com', mobile: 8888888888, joindate:'1/1/2020', role:'hairstylist', action:''},
  
];
