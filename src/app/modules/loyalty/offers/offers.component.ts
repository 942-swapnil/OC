import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';
import csc from 'country-state-city';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AddOffersComponent } from './add-offers/add-offers.component';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss']
})
export class OffersComponent implements OnInit {
//   OffersForm:FormGroup
//   countryList: any;
//   stateList: any;
//   cityList: any;

//   constructor() {
//     this.getCountry()
//    }

//   ngOnInit(): void {
//     this.OffersForm= new FormGroup({
//     })
//   }
  
//   getCountry(){
//     this.countryList=csc.getAllCountries();
    
//   }

//   countryId(event){
//     const countryId= event.value;
//     this.stateList=csc.getStatesOfCountry(countryId);
//   }

//   stateId(event){
//     const stateId= event.value;
//     this.cityList= csc.getCitiesOfState(stateId);
//   }

//   serviceList: any[] = ['Services', 'Product', 'Rental Items','Membership Cards'];
//   setsList: any[] =['Hair Cut','Hair Colouring','Keratin Treatment','Manicure','Padicure'];
//   loyaltyList: any[] = ['None','Coupons','Membership','Packages','Referrals','Styllo Offers','Vouchers'];
//   daysList: any[] = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];

// }

drp: boolean;
  searchText: any;
  droups: boolean = false;
  multi: boolean = false;
  selectedOption = 'All';
 
  displayedColumns: string[] = ['offer', 'discount','services', 'status','branches','dos','doe','Validity','remaining','id'];
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
    const dialogRef = this.dialog.open(AddOffersComponent, {
      width: '80%',
      data : status
      
    });
    
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  };
 
}


export interface PeriodicElement {
  offer: string;
  discount : string;
  services: string;
  status: string;
  branches:string;
  dos: string;
  doe: string;
  Validity: string;
  remaining: string;
  id:string;
  
}

const ELEMENT_DATA: PeriodicElement[] = [
 
  {offer:'Monsoon Mania', discount:'Upto 35%', services:'35', status:'Active', branches:'Nandanvan', dos:'1-Jul-2020', doe:'31-Jul-2020', Validity:'30 Days', remaining:'9 Days',id:'1'}
 
];
