import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import csc from 'country-state-city';
import { FormGroup, FormControl } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.scss']
})
export class BrandComponent implements OnInit {

  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }



  drp: boolean;
  searchText: any;
  droups: boolean = false ;
  multi: boolean = false ;
  selectedOption = 'All' ;

  BrandForm: FormGroup;
  upg :boolean =false;
  deg :boolean =false;
  trans :boolean =false;
  countryList: any;
  stateList: any;
  cityList: any;

  displayedColumns: string[] = ['position', 'name', 'type', 'outlet'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  displayedColumns1: string[] = ['position', 'name', 'type'];
  dataSource1 = new MatTableDataSource<PeriodicElement1>(ELEMENT_DATA1);
  displayedColumns12: string[] = ['position', 'Account Holder', 'Bank','Account Type','IFSC','Branch','Account No','Swift Code','Office / Outlets','Pan Card'];
  dataSource12 = new MatTableDataSource<PeriodicElement12>(ELEMENT_DATA12);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor() { 
    this.getCountry()
  }

  ngOnInit(): void {
    this.BrandForm = new FormGroup ({
      upgrade : new FormControl('Non-upgradable'),
      none : new FormControl('None'),
      transfer : new FormControl('Non-transferable'),
      applied : new FormControl('Services')
    })

    this.dataSource.paginator = this.paginator;
  }

  browser1(event){
  console.log("BrandComponent -> event", event)
  }

  getCountry(){
    this.countryList = csc.getAllCountries();
    console.log("ContactFormComponent -> getCountry -> this.countryList", this.countryList);
  }

  CountryId(event){
    const countryId = event.value;
    this.stateList = csc.getStatesOfCountry(countryId);
  }

  StateId(event){
    const stateId = event.value;
    this.cityList = csc.getCitiesOfState(stateId);
  }

 
  upgrad(value){
    if(value=='t'){
      this.upg=true;
    }
    else{
      this.upg=false;
    }
    
  }
 
  degrad(value){
    if(value=='t'){
      this.deg=true;
    }
    else{
      this.deg=false;
    }
  }

  transfer(value){
    if (value=='t') {
      this.trans=true;  
    }
    else{
      this.trans=!this.trans;
    }
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


}

export interface PeriodicElement {
  name: string;
  position: number;
  type: any;
  outlet: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Brand1', type:'Franchisee',  outlet: 10 },
  {position: 2, name: 'Brand2', type:'Franchisor',  outlet: 20},
  {position: 3, name: 'Brand3', type:'Owner', outlet: 16},
  {position: 4, name: 'Brand4', type:'Owner',  outlet: 30 },
  {position: 5, name: 'Brand5', type:'Franchisee',  outlet: 50},
];

export interface PeriodicElement1 {
  name: string;
  position: number;
  type: any;
  // outlet: number;
}

const ELEMENT_DATA1: PeriodicElement1[] = [
  {position: 1, name: 'Outlet1', type:'Franchisee' },
  {position: 2, name: 'Outlet2', type:'Franchisor'},
  {position: 3, name: 'Outlet3', type:'Owner'},
  {position: 4, name: 'Outlet4', type:'Owner'},
  {position: 5, name: 'Outlet5', type:'Franchisee' },
];

export interface PeriodicElement12 {
  AccountHolder: string;
  position: number;
  Bank :any;
  AccountType :any;
  IFSC:any;
  Branch:any;
  AccountNo:any;
  SwiftCode:any;
  Office:any;
  pancard:any;
}

const ELEMENT_DATA12: PeriodicElement12[] = [
  {position: 1, AccountHolder: 'A.E. Enterprises',  Bank:'AXIS Bank',AccountType:'Current',IFSC:'123456',Branch:'Nandanvan',AccountNo:'123456789100',SwiftCode:'123456',Office:'Head Office',pancard:'12ABC123' },
  {position: 2, AccountHolder: 'A.E. Enterprises',  Bank:'SBI',AccountType:'Current',IFSC:'123456',Branch:'Nandanvan',AccountNo:'123456789100',SwiftCode:'123456',Office:'CHANGE - TTN',pancard:'12ABC123' },
  {position: 3, AccountHolder: 'A.E. Enterprises',  Bank:'PNB',AccountType:'Current',IFSC:'123456',Branch:'Nandanvan',AccountNo:'123456789100',SwiftCode:'123456',Office:'CHANGE - WDN',pancard:'12ABC123' },
  
 
];
