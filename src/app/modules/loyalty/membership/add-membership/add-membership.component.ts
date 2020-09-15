import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';
import csc from 'country-state-city';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { moveItemInArray, CdkDragDrop } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-add-membership',
  templateUrl: './add-membership.component.html',
  styleUrls: ['./add-membership.component.scss']
})
export class AddMembershipComponent implements OnInit {
  MembershipForm: FormGroup;
  upg :boolean =false;
  deg :boolean =false;
  trans :boolean =false;
  countryList: any;
  stateList: any;
  cityList: any;
  val: any;
  v1: any;
  v2: any;
  given: any;
  dis: boolean =false;


  movies = [
    {
      id: 2,
      option1: "Gender",
      option2: "Since",
    },
    {
      id: 3,
      option1: "Mobile No.",
      option2: "Email",
    },
    {
      id: 4,
      option1: "Labels",
      option2: "Facebook",
      option3: "Twitter",
    },
    {
      id: 5,
      option1: "Frequency",
      option2: "Whats App",
      option3: "Linkedin",
    },
  ];
  fields = [];
  vall: number;
  oncheck: boolean =false;
  
  
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dataService: DataService) {
    this.fields = this.dataService.field;
    console.log("AddMembershipComponent -> constructor -> this.dataService.field", this.dataService.field)
    this.given = data;
    console.log("AddMembershipComponent -> constructor -> this.given", this.given)

    
    console.log("AddMembershipComponent -> constructor -> myArray", this.myArray)
    this.getCountry()
   }

   drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.movies, event.previousIndex, event.currentIndex);
  }

  ngOnInit(): void {
    this.MembershipForm = new FormGroup ({
      upgrade : new FormControl('Non-upgradable'),
      none : new FormControl('None'),
      transfer : new FormControl('Non-transferable'),
      applied : new FormControl('Services'),
      cancle : new FormControl('Day')
    })
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
oncheckprice(){
// console.log("AddMembershipComponent -> oncheckprice -> value", value)

  
  this.v1=(parseInt(this.val))*18/100;

this.v2=(parseInt(this.val))+(parseInt(this.v1));


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

myArray = [];


addfield(value:number){
console.log("AddMembershipComponent -> addfield -> value", value)

this.myArray.length=value
console.log("AddMembershipComponent -> addfield -> this.myArray", this.myArray)

  


}

display(value){
if(value=='t')
{
  this.dis=true;
}
else{
  this.dis=false;
}
}

}