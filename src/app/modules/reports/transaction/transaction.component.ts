import { AddTransactionComponent } from './../add-transaction/add-transaction.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
})
export class TransactionComponent implements OnInit {
  drp: boolean;
  searchText: any;
  droups: boolean = false;
  multi: boolean = false;
  selectedOption = 'All';
 
  displayedColumns: string[] = ['date', 'initatied','transaction', 'account','amount','balance','id'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }
  
 

  

  constructor(public router : Router , public dialog: MatDialog) { 
  
  
  }

  gotoList() {
    this.router.navigate(['/contacts/add']);
  }



  onclickDropdwn(){
    this.drp=!this.drp;
  }

  droup(){
    this.droups=!this.droups;
  }

  multiContact(){
    this.multi = !this.multi;
  }


  openDialog(status) {
  console.log("TransactionComponent -> openDialog -> status", status)
    const dialogRef = this.dialog.open(AddTransactionComponent, {
      // width: '80%',
      data : status
      
    });
    
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  };
 
}


export interface PeriodicElement {
  date: string;
  initatied : string;
  transaction: string;
  account: string;
  amount:string;
  balance: string;
  id:string;
  
}

const ELEMENT_DATA: PeriodicElement[] = [
 
  {date:'8-Sep-20', initatied:'8-Sep-20', transaction:'Lent', account:'Sulakshna Pandit', amount:'Rs.1000', balance:'-1000', id:'1'},

  {date:'7-Sep-20', initatied:'8-Sep-20', transaction:'Borrowed', account:'Subhash Kumar', amount:'Rs.500', balance:'500', id:'2'},

  {date:'6-Sep-20', initatied:'9-Sep-20', transaction:'Collected From', account:'Maya Singh', amount:'Rs.1000', balance:'0', id:'3'},

  {date:'5-Sep-20', initatied:'8-Sep-20', transaction:'Returned To', account:'Ritu Sharma', amount:'Rs.1000', balance:'0', id:'4'},

  {date:'4-Sep-20', initatied:'8-Sep-20', transaction:'Exchanged', account:'Terminal 2', amount:'Rs.1000', balance:'0', id:'5'},

  {date:'3-Sep-20', initatied:'8-Sep-20', transaction:'Purchase', account:'Sudarshan Kirana', amount:'Rs.1000', balance:'1000', id:'6'},
  
 
];