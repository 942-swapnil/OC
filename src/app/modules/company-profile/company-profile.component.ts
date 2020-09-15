import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import csc from 'country-state-city';
import { FormGroup, FormControl, FormBuilder, FormArray } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-company-profile',
  templateUrl: './company-profile.component.html',
  styleUrls: ['./company-profile.component.scss']
})
export class CompanyProfileComponent implements OnInit {
  drp: boolean;
  searchText: any;
  droups: boolean = false ;
  multi: boolean = false ;
  selectedOption = 'All' ;

  CompanyProfile: FormGroup;
  upg :boolean =false;
  deg :boolean =false;
  trans :boolean =false;
  countryList: any;
  stateList: any;
  cityList: any;

  step = 0;

  displayedColumns: string[] = ['position', 'name', 'type', 'outlet'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  displayedColumns1: string[] = ['position', 'name', 'type'];
  dataSource1 = new MatTableDataSource<PeriodicElement1>(ELEMENT_DATA1);
  displayedColumns12: string[] = ['position', 'Account Holder', 'Bank','Account Type','IFSC','Branch','Account No','Swift Code','Office / Outlets','Pan Card'];
  dataSource12 = new MatTableDataSource<PeriodicElement12>(ELEMENT_DATA12);

  displayedColumns22: string[] = ['position', 'Address', 'label','PeopleNo','Time'];
  dataSource22 = new MatTableDataSource<PeriodicElement22>(ELEMENT_DATA22);

  // displayedColumns32: string[] = ['Profile','Name','Job Title','Outlets','City'];
  // dataSource32 = new MatTableDataSource<PeriodicElement32>(ELEMENT_DATA32);

  displayedColumns32: string[] = ['Profile','Name','Job Title','Outlets','City'];
  dataSource32 = new MatTableDataSource<PeriodicElement32>(ELEMENT_DATA32);
  selectImage1:any [];

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }



  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private fb:FormBuilder) { 
    this.getCountry()

    this.CompanyProfile = this.fb.group ({
      CompanyName : '',
      CompanyType : '',
      // emails: this.fb.array([this.createEmail()]) ,
      CompanyDetails: this.fb.array([this.newCompanyDetails()]),
      businessNature : '',
      COINumber : '',
      FilesCountNumber : '',
      UAIDNumber: '',
      GSTNumber: '',
      TDSNumber : ''
    })
  }


  browser1(event) {
    const file = event.target.files;
    console.log("ContactFormComponent -> browser -> event", event);
  }

  browserCOI(event){
    const file = event.target.files;
  console.log("CompanyProfileComponent -> browserCOI -> event", event)
  }

  browserMOA(event){
    const file = event.target.files;
  console.log("CompanyProfileComponent -> browserMOA -> event", event)
  }

  browserUAID(event){
    const file = event.target.files;
  console.log("CompanyProfileComponent -> browserUAID -> event", event)
  }
  
  browserGST(event){
    const file = event.target.files;
  console.log("CompanyProfileComponent -> browserGST -> event", event)
  }

  browserTDS(event){
    const file = event.target.files;
  console.log("CompanyProfileComponent -> browserTDS -> event", event)
  }

  browserOTHER(event){
    const file = event.target.files;
  console.log("CompanyProfileComponent -> browserOTHER -> event", event)
    this.selectImage1= file

  }


  // ImageArray :any =[

  // ]
  // addImages(){
  //   this.ImageArray.push({
  //     Name: "Other Document1",
  //     formName: "other1"
  //   })
  // }

  
  // setStep(index: number) {
  //   this.step = index;
  // }

  // addImage() {
  //   this.step++;
  // }


  emails() : FormArray {
    return this.CompanyProfile.get("emails") as FormArray
  }



  createEmail(): FormGroup {
    return this.fb.group({
      emailLable: ['Home'],
      email: [''],
    });
  }

  

  addQuantity() {
    this.emails().push(this.createEmail());
  }
  removeQuantity(i:number) {
      this.emails().removeAt(i);
  }


  

  ngOnInit(): void {
    
    this.dataSource.paginator = this.paginator;
  }

  CompanyDetails(): FormArray {
    return this.CompanyProfile.get("CompanyDetails") as FormArray
  }

  newCompanyDetails() {
    return this.fb.group({
      contactPerson : [''],
      TypeCompany : [''],
      ShareOccupy : [''],
      Designation : ['']
    })
  }
 

  addCompanyDetails() {
    this.CompanyDetails().push(this.newCompanyDetails());
  }

  removeCompanyDetails(i:number) {
      this.CompanyDetails().removeAt(i);
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

  serviceList: any[] = ['Services', 'Product', 'Rental Items','Membership Cards'];

  overlap: any[] = ['Coupons','Offers ','Packages ','Referrals','Vouchers'];

  redemption: any[] = [ 'Only The Card Holder','Everyone On The Ticket','Card Holder And Seleced Relative Only'];

  gender: any[] = ['Male','Female','Third Gender'];

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

export interface PeriodicElement22 {
  Address: string;
  label: any;
  PeopleNo :any;
  TimeFrom :any;
  TimeTo:any;
  position:number;
 
}

const ELEMENT_DATA22: PeriodicElement22[] = [
  {position: 1, Address: 'A.E. Enterprises',  label:'Head Quarter',PeopleNo:'21',TimeFrom:'10:30',TimeTo:'20:00'},
  {position: 2, Address: 'A.E. Enterprises',  label:'Country Office',PeopleNo:'12',TimeFrom:'9:30',TimeTo:'19:30'},
  {position: 3, Address: 'A.E. Enterprises',  label:'Zonal Office',PeopleNo:'25',TimeFrom:'7:30',TimeTo:'16:30'},
  {position: 4, Address: 'A.E. Enterprises',  label:'Reginal Office',PeopleNo:'25',TimeFrom:'7:30',TimeTo:'16:30'},
  {position: 5, Address: 'A.E. Enterprises',  label:'Local Office',PeopleNo:'25',TimeFrom:'7:30',TimeTo:'16:30'},
  
 
];

export interface PeriodicElement32 {
  City: any;
  JobTitle: any;
  Outlets: any;
  Name: string;
  Profile: any;
}

const ELEMENT_DATA32: PeriodicElement32 [] = [
  {Profile: 'cascsa', Name: 'Anjali Sharma',  JobTitle:'Hair Dresser', Outlets:'A.E. Enterprises', City:'Nagpur'},
  {Profile: 'cascsa', Name: 'Prashant Hingole',  JobTitle:'Skin Care', Outlets:'A.E. Enterprises', City:'Pune'},
  {Profile: 'cascsa', Name: 'Pranay Singh',  JobTitle:'Hair Dresser', Outlets:'A.E. Enterprises', City:'Mumbai'},
  {Profile: 'csacsa', Name: 'Pankaj Jain',  JobTitle:'Massager', Outlets:'A.E. Enterprises', City:'Hydrabad'},
  {Profile: 'csacsa', Name: 'Sambhav Chopde',  JobTitle:'Watchman', Outlets:'A.E. Enterprises', City:'Haryana'},
];




