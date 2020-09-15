import  csc  from 'country-state-city';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-offers',
  templateUrl: './add-offers.component.html',
  styleUrls: ['./add-offers.component.scss']
})
export class AddOffersComponent implements OnInit {
  OffersForm:FormGroup
  countryList: any;
  stateList: any;
  cityList: any;
  val: any;
  v1: any;
  v2: any;
  war: any;
  v11: any;
  v12: any;
  oncheck: boolean=false;
  w2: any;
  wal: any;
  w1: any;

  constructor() {
    this.getCountry()
   }

  ngOnInit(): void {
    this.OffersForm= new FormGroup({
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
    const stateId= event.value;
    this.cityList= csc.getCitiesOfState(stateId);
  }




  serviceList: any[] = ['Services', 'Product', 'Rental Items','Membership Cards'];
  setsList: any[] =['Hair Cut','Hair Colouring','Keratin Treatment','Manicure','Padicure'];
  loyaltyList: any[] = ['None','Coupons','Membership','Packages','Referrals','Styllo Offers','Vouchers'];
  // daysList: any[] = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];


  
  toppings = new FormControl();
  daysList: any[] = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
  selectAll(ev){
   
    if(ev._selected){
this.toppings.setValue(['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']);
ev._selected=true;
    }
    if(ev._selected==false){
      this.toppings.setValue([]);
    }
    
  }

  oncheckprice(){
    this.v1=(parseInt(this.val))*18/100;
    
    this.v2=(parseInt(this.val))+(parseInt(this.v1))
  }


  onKey(event:any){
    console.log("AddMembershipComponent -> onKey -> event", event)
    this.val= event.target.value;
    console.log("AddMembershipComponent -> onKey -> this.val", this.val)
    
    if(this.oncheck){
      this.v1=(parseInt(this.val))*18/100;
    
    this.v2=(parseInt(this.val))+(parseInt(this.v1))
    }else{
    
      this.v2 = this.val;
    
    }
      
    }

    oncheckprice1(){
      this.w1=(parseInt(this.wal))*18/100;
      
      this.w2=(parseInt(this.wal))+(parseInt(this.w1))
    }
  
  
    onIn(event:any){
      console.log("AddOffersComponent -> onIn -> event", event)
      this.wal= event.target.value;
      console.log("AddOffersComponent -> onIn -> this.wal", this.wal)
      
      if(this.oncheck){
        this.w1=(parseInt(this.wal))*18/100;
      
      this.w2=(parseInt(this.wal))+(parseInt(this.w1))
      }else{
      
        this.w2 = this.wal;
      
      }
        
      }


    // onIn(event:any){
    //   console.log("AddMembershipComponent -> onKey -> event", event)
    //   this.war= event.target.value;
    //   console.log("AddMembershipComponent -> onKey -> this.war", this.war)
      
    //   this.v11=(parseInt(this.war))*18/100;
      
    //   this.v12=(parseInt(this.war))+(parseInt(this.v11))
        
    //   }

}

