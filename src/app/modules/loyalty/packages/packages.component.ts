import { Component, OnInit, ViewChild } from '@angular/core';
import csc from 'country-state-city';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AddPackageComponent } from './add-package/add-package.component';

@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.scss']
})
export class PackagesComponent implements OnInit {
//   countryList: any;
//   stateList: any;
//   cityList: any;

//   constructor() { }

//   ngOnInit(): void {
//     this.getCountry()
//   }

//   getCountry(){
//     this.countryList=csc.getAllCountries();
    
//   }

//   countryId(event){
//     const countryId= event.value;
//     this.stateList=csc.getStatesOfCountry(countryId);
//   }

//   stateId(event){
//     const stateId=event.value;
//     this.cityList=csc.getCitiesOfState(stateId);
//   }

//   servicelist: any[] = ['','',''];

// }

drp: boolean;
  searchText: any;
  droups: boolean = false;
  multi: boolean = false;
  selectedOption = 'All';
 
  displayedColumns: string[] = ['package', 'service','percent', 'act_amt','dis_amt','valid','id'];
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
    // console.log("AddStationComponent -> openDialog -> status", status)
    const dialogRef = this.dialog.open(AddPackageComponent, {
      width: '80%',
      data : status
      
    });
    
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  };
 
}


export interface PeriodicElement {
  package: string;
  service : string;
  percent: string;
  act_amt: string;
  dis_amt:string;
  valid: string;
  id:string;
  
}

const ELEMENT_DATA: PeriodicElement[] = [
 
  {package:'Silver Package Men', service:'Aroma Body Massage', percent:'25%', act_amt:'2360', dis_amt:'1770', valid:'Mon, Tue, Wed',id:'1'},
  {package:'Silver Package Men', service:'Italian Waxing%', percent:'30%', act_amt:'1652', dis_amt:'Rs. 1239', valid:'Mon, Tue, Wed', id:'2'}
 
];
