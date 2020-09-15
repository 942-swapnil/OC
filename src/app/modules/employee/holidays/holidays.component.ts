import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-holidays',
  templateUrl: './holidays.component.html',
  styleUrls: ['./holidays.component.scss']
})
export class HolidaysComponent implements OnInit {
  displayedColumns: string[] = ['title', 'holidaydate', 'day','action'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  constructor() { }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
  }

}



export interface PeriodicElement {
  title: string;
  holidaydate: any;
  day: any;
  action:any;
  


}

const ELEMENT_DATA: PeriodicElement[] = [
  {title: 'New Year', holidaydate:'01/01/2020', day:'Wednesday',  action:''},
  {title: 'Republic Day', holidaydate: '26/01/2020', day:'Sunday',  action:''},
  {title: 'Shivaji Jayanti', holidaydate: '19/02/2020', day:'Wednesday', action:''},
  {title: 'Maha Shivaratri', holidaydate: '21/02/2020', day:'Friday',  action:''},
  {title: 'Holi', holidaydate: '10/03/2020', day:'Tuesday',  action:''},
  {title: 'Ramzan Id/Eid-ul-Fitar', holidaydate: '25/05/2020', day:'Monday',  action:''},
  {title: 'Independence Day', holidaydate: '15/08/2020', day:'Saturday',  action:''},
  {title: 'Dussehra', holidaydate: '25/10/2020', day:'Sunday',  action:''},
  {title: 'Naraka Chaturdasi', holidaydate: '14/11/2020', day:'Saturday',  action:''},
  {title: 'Diwali/Deepavali', holidaydate: '15/10/2020', day:'Sunday',  action:''},
  {title: 'Christmas', holidaydate: '25/12/2020', day:'Friday',  action:''},
  {title: 'New Years Eve', holidaydate: '31/12/2020', day:'Thursday',  action:''},
  
  
];