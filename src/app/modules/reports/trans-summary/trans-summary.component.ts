import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-trans-summary',
  templateUrl: './trans-summary.component.html',
  styleUrls: ['./trans-summary.component.scss']
})
export class TransSummaryComponent implements OnInit {
  panelOpenState = false;
  searchText: any;


  displayedColumns: string[] = ['label','cash','card','online','styllon','cash1','card1','online1','styllon1','id'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  displayedColumns1: string[] = ['label','cash','card','online','styllon','cash1','card1','online1','styllon1','id'];
  dataSource1 = new MatTableDataSource<PeriodicElement1>(ELEMENT_DATA1);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  showPage: boolean = false;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    // this.dataSource1.paginator = this.paginator;

  }

  constructor(public dialog: MatDialog) { }

  // openDialog(status) {
  //   console.log("ContactsComponent -> openDialog -> status", status)
  //   const dialogRef = this.dialog.open(AddServiceBoxComponent , {
  //     // width: '80vh',
  //     data : status
  //   });
    
  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log(`Dialog result: ${result}`);
  //   });
  // };

  fullPage(){
    this.showPage= !this.showPage;
  }

}

export interface PeriodicElement {
  label: any;
  cash: any;
  card: any;
  online: any;
  styllon : any;
  cash1: any;
  card1:any;
  online1 : any;
  styllon1: any;
  id:any;
  
}

const ELEMENT_DATA: PeriodicElement[] = [
  {label:'Daily Collection',cash:'8000',card:'0.00',online:'',styllon:'',cash1:'8000',card1:'0.00',online1:'',styllon1:'',id:'1'},
  {label:'Accessories Deposit',cash:'0',card:'0.00',online:'',styllon:'',cash1:'0',card1:'0.00',online1:'',styllon1:'',id:'2'},
  {label:'Payment Due',cash:'0',card:'0.00',online:'',styllon:'',cash1:'0',card1:'0.00',online1:'',styllon1:'',id:'3'},
  {label:'Dues Returned',cash:'',card:'0.00',online:'',styllon:'',cash1:'',card1:'0.00',online1:'',styllon1:'',id:'4'},
  {label:'Handover',cash:'37,000.00',card:'0.00',online:'',styllon:'',cash1:'37,000.00',card1:'0.00',online1:'',styllon1:'',id:'5'},
  {label:'Expenses',cash:'',card:'0.00',online:'',styllon:'',cash1:'0.00',card1:'0.00',online1:'',styllon1:'',id:'6'},
  {label:'Missing Amount',cash:'',card:'0.00',online:'',styllon:'',cash1:'',card1:'0.00',online1:'',styllon1:'',id:'7'},
  {label:'Total Outgoing Cash',cash:'45,000.00',card:'0.00',online:'',styllon:'',cash1:'45,000.00',card1:'0.00',online1:'',styllon1:'',id:'8'},
  {label:'Closing Amount',cash:'8,777.00',card:'0.00',online:'',styllon:'',cash1:'8,777.00',card1:'0.00',online1:'',styllon1:'',id:'9'}
];

export interface PeriodicElement1 {
  label: any;
  cash: any;
  card: any;
  online: any;
  styllon : any;
  cash1: any;
  card1:any;
  online1 : any;
  styllon1: any;
  id:any;
}

const ELEMENT_DATA1: PeriodicElement1[] = [
  {label:'Opening Balance',cash:'2910',card:'',online:'',styllon:'',cash1:'8,777',card1:'',online1:'',styllon1:'',id:'1'},
  {label:'Add Cash',cash:'',card:'',online:'',styllon:'',cash1:'0',card1:'',online1:'',styllon1:'',id:'2'},
  {label:'Product Sale',cash:'3100',card:'950',online:'',styllon:'',cash1:'675',card1:'365',online1:'',styllon1:'',id:'3'},
  {label:'Service Sale',cash:'37767',card:'32858',online:'',styllon:'',cash1:'46,614',card1:'27,895',online1:'',styllon1:'',id:'4'},
  {label:'Dues Received',cash:'0',card:'0',online:'',styllon:'',cash1:'0',card1:'',online1:'',styllon1:'',id:'5'},
  {label:'Membership',cash:'0',card:'0',online:'',styllon:'',cash1:'0',card1:'',online1:'',styllon1:'',id:'6'},
  {label:'Accessories Deposit',cash:'0',card:'0',online:'',styllon:'',cash1:'',card1:'',online1:'',styllon1:'',id:'7'},
  {label:'Makeups',cash:'10000',card:'0',online:'',styllon:'',cash1:'0',card1:'',online1:'',styllon1:'',id:'8'},
  {label:'Packages',cash:'0',card:'3504',online:'',styllon:'',cash1:'0',card1:'',online1:'',styllon1:'',id:'9'},
  {label:'Vouchers',cash:'0',card:'',online:'',styllon:'',cash1:'0',card1:'',online1:'',styllon1:'',id:'10'},
  {label:'Card Payments',cash:'0',card:'0',online:'',styllon:'',cash1:'',card1:'',online1:'',styllon1:'',id:'11'},
  {label:'Total Incoming Cash',cash:'53,777.00',card:'',online:'',styllon:'',cash1:'56,066.00',card1:'',online1:'',styllon1:'',id:'12'},
  {label:'Card Settlement',cash:'',card:'',online:'',styllon:'',cash1:'',card1:'',online1:'',styllon1:'',id:'13'}
];