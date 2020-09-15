import { AddVouchersComponent } from './add-vouchers/add-vouchers.component';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-vouchers',
  templateUrl: './vouchers.component.html',
  styleUrls: ['./vouchers.component.scss']
})
export class VouchersComponent implements OnInit {
//   int: boolean = false;
//   vouchersForm:FormGroup;
//   vaua: boolean = false;
//   rupee: boolean = false;
//   dis: boolean = false;
//   val2: any;
//   val1: any;
//   tt: boolean =false;
//   ff: boolean =false;

//   constructor() { }

//   ngOnInit(): void {
//     this.vouchersForm= new FormGroup({
//       not: new FormControl('Not Applied')
//     })
//   }

//   daysList: any[] = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
//   branchList: any[] = ['Nandanvan','Sadar','Burdi','Hingna'];
//   servicelist: any[] = ['','',''];
//   otherList: any[] = ['Any','','',''];

//   intern(event){
//   console.log("VouchersComponent -> intern -> event", event)
//   // this.val1 = event.value;
//   // console.log("VouchersComponent -> intern -> this.val1", this.val1)
//   if(event.value == 'Internal'){
//     this.tt=true;
//   }
//   else{
//     this.tt=false;
//   }
  
  
//   }


//   vou(event){
//   console.log("VouchersComponent -> vou -> event", event)
//   // this.val2 = event.value;
//   // console.log("VouchersComponent -> vou -> this.val2", this.val2)
//   if(event.value =='Free'){
//     this.ff=true;
//   }
//   else{
//     this.ff=false;
//   }
  
//   }

//   worth(value){
//     this.rupee=true;
//     this.dis=false;
//   }

//   count(value){
//     this.dis=true;
//     this.rupee=false;
//   }
  
// }


drp: boolean;
  searchText: any;
  droups: boolean = false;
  multi: boolean = false;
  selectedOption = 'All';
 
  // displayedColumns: string[] = ['membership', 'discount','rate', 'gst','price','FRFI','Validity','id'];
  displayedColumns: string[] = ['category', 'vouchertype','redeemedat','branches','frequency','id'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }
  
 

  

  constructor(public router : Router , public dialog: MatDialog) { 
  
  
  }

 

  // applyFilter(event: Event) {
  //   const filterValue = (event.target as HTMLInputElement).value;
  //   this.dataSource.filter = filterValue.trim().toLowerCase();

  //   if (this.dataSource.paginator) {
  //     this.dataSource.paginator.firstPage();
  //   }
  // }

  

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
    console.log("openDialog -> status", status)
    const dialogRef = this.dialog.open(AddVouchersComponent, {
      width: '80%',
      data : status
      
    });
    
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  };
 
}


export interface PeriodicElement {
  category: string;
  vouchertype: string;
  redeemedat: string;
  branches: string;
  frequency:string;
  id:string;
  
}

const ELEMENT_DATA: PeriodicElement[] = [
 
  { category:'Cross Promotion', vouchertype:'Free', redeemedat:'Radisson', branches:'Noida, Indore....',frequency:'',  id:'1'},
  
  { category:'Cross Promotion', vouchertype:'Free', redeemedat:'Our Outlet', branches:'Noida, Indore....',frequency:'',  id:'2'},

  { category:'Internal Promotion', vouchertype:'Prepaid', redeemedat:'Our Outlet', branches:'Noida, Indore....',frequency:'',  id:'3'},
  
  { category:'Internal Promotion', vouchertype:'Free', redeemedat:'Our Outlet', branches:'Noida, Indore....',frequency:'',  id:'4'},

];