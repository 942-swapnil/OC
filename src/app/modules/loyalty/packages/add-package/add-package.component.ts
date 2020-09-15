import  csc from 'country-state-city';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-add-package',
  templateUrl: './add-package.component.html',
  styleUrls: ['./add-package.component.scss']
})
export class AddPackageComponent implements OnInit {
  PackageForm: FormGroup;
  countryList: any;
  stateList: any;
  cityList: any;
  values: any =0;
  val: any =0;
  val2: any;
  val3: any;
  val4: any;
  val5: any;
  val6: any;
  val7: any;
  val8: any;  
  valve: any;
  v1: any = 0;
  v3: any;
  v2: any;
  v11: any;
  v12: any;
  as: any = 10;
  v13: any;
  sww: any;
  v14: any;
  walues: any;

  constructor() { 
    this.getCountry()

   
  }
 

  ngOnInit(): void {
    this.PackageForm= new FormGroup({
      overlap : new FormControl('No')
    })

  }

  getCountry(){
    this.countryList=csc.getAllCountries();
    
  }

  countryId(event){
    const countryId= event.value;
    this.stateList=csc.getStatesOfCountry(countryId);
  }

  stateId(event){
    const stateId=event.value;
    this.cityList=csc.getCitiesOfState(stateId);
  }

  servicelist: any[] = ['','',''];


  onKey(event:any){
  console.log("AddPackageComponent -> onKey -> event", event)
  this.val=event.target.value;
  console.log("AddPackageComponent -> onKey -> this.val", this.val)
  this.sww = parseInt(this.val) + parseInt(this.v1);
    
    this.walues=(parseInt(this.val))*18/100;
    console.log("AddPackageComponent -> onKey -> this.walues", this.walues)

    this.val2=(parseInt(this.val))+(parseInt(this.walues));
    console.log("AddPackageComponent -> onKey -> this.val2", this.val2)
  }

    onKey2(event:any){
    console.log("AddPackageComponent -> event", event)
    this.val4 = event.target.value;
    console.log("AddPackageComponent -> this.val4", this.val4)

    this.val5 = (parseInt(this.sww))*(parseInt(this.val4))/100;

    this.val6 = (parseInt( this.sww))-(parseInt(this.val5))
      
    
    this.val8= (parseInt(this.val6))*18/100;

    this.valve=(parseInt(this.val6))+(parseInt(this.val8));
      
    }
  


    onIn(event: any) {
      console.log("AddPackageComponent -> onKey -> event", event)
      this.v1= event.target.value;
      console.log("AddPackageComponent -> onIn -> this.v1", this.v1)
      // console.log("AddPackageComponent -> onKey -> this.val", this.val)
      this.sww = parseInt(this.val) + parseInt(this.v1);
   
    
         this.v11 = (parseInt(this.v1))*18/100;

         console.log("AddPackageComponent -> onIn -> this.v11", this.v11)
    
        // console.log("AddPackageComponent -> onKey -> this.val", this.v11)
        this.v12 = (parseInt(this.v1))+(parseInt(this.v11));
        console.log("AddPackageComponent -> onIn -> this.v12", this.v12)
        // console.log("AddPackageComponent -> onKey -> this.val2", this.v12)

      
      console.log("AddPackageComponent -> this.v3", this.v3)
  
      this.v13 = (parseInt(this.sww))*18/100;

      this.v14 =(parseInt(this.sww))+(parseInt(this.v13));
      }
}
export interface PeriodicElement {
  service: string;
  rate:string;
  gst_per: string;
  gst_rs:string;
  price: string;
  id:string;
  
}

const ELEMENT_DATA: PeriodicElement[] = [
 
  {service:'Hair Cut',rate:'', gst_per:'', gst_rs:'',price:'',id:'1'},
  {service:'Hair Color', rate:'', gst_per:'', gst_rs:'',price:'',id:'2'}
 
];