
import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import csc from 'country-state-city';
import { FormGroup, FormControl } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-outlet',
  templateUrl: './outlet.component.html',
  styleUrls: ['./outlet.component.scss']
})
export class OutletComponent implements OnInit {
  drp: boolean;
  searchText: any;
  droups: boolean = false ;
  multi: boolean = false ;
  selectedOption = 'All' ;

  MembershipForm: FormGroup;
  upg :boolean =false;
  deg :boolean =false;
  trans :boolean =false;
  countryList: any;
  stateList: any;
  cityList: any;

  displayedColumns32: string[] = ['Profile','Name','Job Title','Outlets','City'];
  dataSource32 = new MatTableDataSource<PeriodicElement32>(ELEMENT_DATA32);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor() { 
    this.getCountry()
  }
  ngOnInit(): void {
    this.MembershipForm = new FormGroup ({
      upgrade : new FormControl('Non-upgradable'),
      none : new FormControl('None'),
      transfer : new FormControl('Non-transferable'),
      applied : new FormControl('Services')
    })
    this.dataSource32.paginator = this.paginator;
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
  
  Amenities =[
      { name:'Styllon', star:['star','star','star','star_half','star_border'], Participation:96 , Status :[ 'Active', 'Out Of Order', 'Remove'] },
      { name:'Power Back Up', star:['star','star','star','star_half','star_border'], Participation:96 , Status :[ 'Active', 'Out Of Order', 'Remove'] },
      { name:'Air Conditioner', star:['star','star','star','star_half','star_border'], Participation:96 , Status :[ 'Active', 'Out Of Order', 'Remove'] },
      { name:'Free Wifi', star:['star','star','star','star_half','star_border'], Participation:96 , Status :[ 'Active', 'Out Of Order', 'Remove'] },
      { name:'Waiting Area', star:['star','star','star','star_half','star_border'], Participation:96 , Status :[ 'Active', 'Out Of Order', 'Remove'] },
      { name:'Sanitization', star:['star','star','star','star_half','star_border'], Participation:96 , Status :[ 'Active', 'Out Of Order', 'Remove'] },
      { name:'Sterilization', star:['star','star','star','star_half','star_border'], Participation:96 , Status :[ 'Active', 'Out Of Order', 'Remove'] },
      { name:'Disposables', star:['star','star','star','star_half','star_border'], Participation:96 , Status :[ 'Active', 'Out Of Order', 'Remove'] },
      { name:'Free Beverages', star:['star','star','star','star_half','star_border'], Participation:96 , Status :[ 'Active', 'Out Of Order', 'Remove'] },
      { name:'Television', star:['star','star','star','star_half','star_border'], Participation:96 , Status :[ 'Active', 'Out Of Order', 'Remove'] },
      { name:'Music', star:['star','star','star','star_half','star_border'], Participation:96 , Status :[ 'Active', 'Out Of Order', 'Remove'] },
      { name:'Magazines', star:['star','star','star','star_half','star_border'], Participation:96 , Status :[ 'Active', 'Out Of Order', 'Remove'] },
      { name:'Cafe', star:['star','star','star','star_half','star_border'], Participation:96 , Status :[ 'Active', 'Out Of Order', 'Remove'] },
      { name:'Air Purifier', star:['star','star','star','star_half','star_border'], Participation:96 , Status :[ 'Active', 'Out Of Order', 'Remove'] }
      






    ]





}

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