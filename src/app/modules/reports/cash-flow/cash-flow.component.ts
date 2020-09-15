import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-cash-flow',
  templateUrl: './cash-flow.component.html',
  styleUrls: ['./cash-flow.component.scss']
})
export class CashFlowComponent implements OnInit {
  panelOpenState = false;
  searchText: any;


  displayedColumns: string[] = ['bill','type','client','mode','c1','c2','c3','c4','c5','c6','c7','c8','c9','c10','total','id'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  displayedColumns1: string[] = ['label','d1','d2','d3','d4','d5','d6','d7','d8','d9','d10','total','id'];
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
  bill: any;
  type: any;
  client: any;
  mode: any;
  c1 : any;
  c2: any;
  c3:any;
  c4 : any;
  c5: any;
  c6:any;
  c7 : any;
  c8: any;
  c9:any;
  c10:any;
  total:any;
  id:any;
  
}

const ELEMENT_DATA: PeriodicElement[] = [
  {bill:'Opening Balance',type:'',client:'',mode:'Cash',c1:'',c2:'',c3:'',c4:'',c5:'',c6:'',c7:'',c8:'',c9:'',c10:'',total:'', id: '1'},
  {bill:'Bill #  1 ',type:'',client:'',mode:'Cash',c1:'',c2:'',c3:'',c4:'',c5:'',c6:'',c7:'',c8:'',c9:'',c10:'',total:'', id: '2'},
  {bill:'Bill #  2',type:'',client:'',mode:'Cash',c1:'',c2:'',c3:'',c4:'',c5:'',c6:'',c7:'',c8:'',c9:'',c10:'',total:'', id: '3'},
  {bill:'Bill #  3',type:'',client:'',mode:'Cash',c1:'',c2:'',c3:'',c4:'',c5:'',c6:'',c7:'',c8:'',c9:'',c10:'',total:'', id: '4'},
  {bill:'Bill #  4',type:'',client:'',mode:'Cash',c1:'',c2:'',c3:'',c4:'',c5:'',c6:'',c7:'',c8:'',c9:'',c10:'',total:'', id: '5'},
  {bill:'Accessories Issue',type:'Accessories Issue',client:'',mode:'Cash',c1:'',c2:'',c3:'',c4:'',c5:'',c6:'',c7:'',c8:'',c9:'',c10:'',total:'', id: '6'},
  {bill:'Bill #  5 ',type:'',client:'',mode:'Cash',c1:'',c2:'',c3:'',c4:'',c5:'',c6:'',c7:'',c8:'',c9:'',c10:'',total:'', id: '7'},
  {bill:'Accessories Deposit',type:'Accessories Issue',client:'',mode:'Cash',c1:'',c2:'',c3:'',c4:'',c5:'',c6:'',c7:'',c8:'',c9:'',c10:'',total:'', id: '8'},
  {bill:'Bill #  6',type:'',client:'',mode:'Cash',c1:'',c2:'',c3:'',c4:'',c5:'',c6:'',c7:'',c8:'',c9:'',c10:'',total:'', id: '9'},
  {bill:'Bill #  7',type:'',client:'',mode:'Cash',c1:'',c2:'',c3:'',c4:'',c5:'',c6:'',c7:'',c8:'',c9:'',c10:'',total:'', id: '10'},

  {bill:'Dues Debited',type:'Dues Debited',client:'',mode:'Cash',c1:'',c2:'',c3:'',c4:'',c5:'',c6:'',c7:'',c8:'',c9:'',c10:'',total:'', id: '11'},
  {bill:'Bill #  8 ',type:'',client:'',mode:'Cash',c1:'',c2:'',c3:'',c4:'',c5:'',c6:'',c7:'',c8:'',c9:'',c10:'',total:'', id: '12'},
  {bill:'Dues Credited',type:'Dues Debited',client:'',mode:'Cash',c1:'',c2:'',c3:'',c4:'',c5:'',c6:'',c7:'',c8:'',c9:'',c10:'',total:'', id: '13'},
  {bill:'Bill #  9',type:'',client:'',mode:'Cash',c1:'',c2:'',c3:'',c4:'',c5:'',c6:'',c7:'',c8:'',c9:'',c10:'',total:'', id: '14'},
  {bill:'Cash Exchange',type:'Cash Exchange',client:'',mode:'Cash',c1:'',c2:'',c3:'',c4:'',c5:'',c6:'',c7:'',c8:'',c9:'',c10:'',total:'', id: '15'},
  {bill:'Bill #  10 ',type:'Make Up',client:'',mode:'Cash',c1:'',c2:'',c3:'',c4:'',c5:'',c6:'',c7:'',c8:'',c9:'',c10:'',total:'', id: '16'},
  {bill:'Petty Cash',type:'Cucumber',client:'',mode:'Cash',c1:'',c2:'',c3:'',c4:'',c5:'',c6:'',c7:'',c8:'',c9:'',c10:'',total:'', id: '17'},
  {bill:'Bill #  11',type:'Bridal Package',client:'',mode:'Cash',c1:'',c2:'',c3:'',c4:'',c5:'',c6:'',c7:'',c8:'',c9:'',c10:'',total:'', id: '18'},
  {bill:'Add Loose Change',type:'Add Loose Change 1',client:'',mode:'Cash',c1:'',c2:'',c3:'',c4:'',c5:'',c6:'',c7:'',c8:'',c9:'',c10:'',total:'', id: '19'},
  {bill:'Bill #  12',type:'',client:'',mode:'Cash',c1:'',c2:'',c3:'',c4:'',c5:'',c6:'',c7:'',c8:'',c9:'',c10:'',total:'', id: '20'},
  
  {bill:'Collection Handover',type:'Handover 1',client:'',mode:'Cash',c1:'',c2:'',c3:'',c4:'',c5:'',c6:'',c7:'',c8:'',c9:'',c10:'',total:'', id: '21'},
  {bill:'Bill #  13 ',type:'',client:'',mode:'Cash',c1:'',c2:'',c3:'',c4:'',c5:'',c6:'',c7:'',c8:'',c9:'',c10:'',total:'', id: '22'},
  {bill:'Daily Collection',type:'Mewar',client:'',mode:'Cash',c1:'',c2:'',c3:'',c4:'',c5:'',c6:'',c7:'',c8:'',c9:'',c10:'',total:'', id: '23'},
  {bill:'Bill # 14',type:'',client:'',mode:'Cash',c1:'',c2:'',c3:'',c4:'',c5:'',c6:'',c7:'',c8:'',c9:'',c10:'',total:'', id: '24'},
  {bill:'Bill # 15',type:'',client:'',mode:'Cash',c1:'',c2:'',c3:'',c4:'',c5:'',c6:'',c7:'',c8:'',c9:'',c10:'',total:'', id: '25'}
];

export interface PeriodicElement1 {
  label: any;
  d1 : any;
  d2: any;
  d3:any;
  d4 : any;
  d5: any;
  d6:any;
  d7 : any;
  d8: any;
  d9:any;
  d10:any;
  total:any;
  id:any;
}

const ELEMENT_DATA1: PeriodicElement1[] = [
  {label:'Average Consumption',d1:'',d2:'',d3:'',d4:'',d5:'',d6:'',d7:'',d8:'',d9:'',d10:'',total:'', id: '1'},
  {label:'Refill Qty.',d1:'',d2:'',d3:'',d4:'',d5:'',d6:'',d7:'',d8:'',d9:'',d10:'',total:'', id: '2'},
  {label:'Standard Qty.',d1:'',d2:'',d3:'',d4:'',d5:'',d6:'',d7:'',d8:'',d9:'',d10:'',total:'', id: '3'},
  {label:'Critical Qty',d1:'',d2:'',d3:'',d4:'',d5:'',d6:'',d7:'',d8:'',d9:'',d10:'',total:'', id: '4'},
  {label:'current Qty.',d1:'',d2:'',d3:'',d4:'',d5:'',d6:'',d7:'',d8:'',d9:'',d10:'',total:'', id: '5'},
  {label:'current Cash',d1:'',d2:'',d3:'',d4:'',d5:'',d6:'',d7:'',d8:'',d9:'',d10:'',total:'', id: '6'},
  {label:'Opening Qty.',d1:'',d2:'',d3:'',d4:'',d5:'',d6:'',d7:'',d8:'',d9:'',d10:'',total:'', id: '7'},
  {label:'Transaction',d1:'',d2:'',d3:'',d4:'',d5:'',d6:'',d7:'',d8:'',d9:'',d10:'',total:'', id: '8'},
];