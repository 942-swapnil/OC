import { moveItemInArray, CdkDragDrop } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-vouchers',
  templateUrl: './add-vouchers.component.html',
  styleUrls: ['./add-vouchers.component.scss']
})
export class AddVouchersComponent implements OnInit {

  int: boolean = false;
  vouchersForm:FormGroup;
  vaua: boolean = false;
  rupee: boolean = false;
  dis: boolean = false;
  val2: any;
  val1: any;
  tt: boolean =false;
  ff: boolean =false;
  given: any;

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
  pp: boolean= false;
  oncheck: boolean=false;
  val: any;
  v1: any;
  v2: any;

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.movies, event.previousIndex, event.currentIndex);
  }


  constructor() { }

  ngOnInit(): void {
    this.vouchersForm= new FormGroup({
      not: new FormControl('Not Applied')
    })
  }

  // daysList: any[] = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
  branchList: any[] = ['Nandanvan','Sadar','Burdi','Hingna'];
  servicelist: any[] = ['','',''];
  otherList: any[] = ['Any','','',''];

  intern(event){
  console.log("VouchersComponent -> intern -> event", event)
  // this.val1 = event.value;
  // console.log("VouchersComponent -> intern -> this.val1", this.val1)
  if(event.value == 'Internal'){
    this.tt=true;
  }
  else{
    this.tt=false;
  }
  
  
  }


  vou(event){
  console.log("VouchersComponent -> vou -> event", event)
  // this.val2 = event.value;
  // console.log("VouchersComponent -> vou -> this.val2", this.val2)
  if(event.value =='Free'){
    this.ff=true;
  }

  else if(event.value == 'Prepaid'){
    this.pp =  true;
  }

  else{
    this.ff=false;
  }
  
  }

  worth(value){
    if(value == 'Worth'){
      this.rupee=true;
      this.dis=false;
    }
    else if(value == 'Discount'){
      this.dis=true;
      this.rupee=false;
    }
    else{
      this.dis=false;
      this.rupee=false;
    }
  }

  // count(value){
  //   this.dis=true;
  //   this.rupee=false;
  // }
  

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
    // console.log("AddMembershipComponent -> oncheckprice -> value", value)
    
      
      this.v1=(parseInt(this.val))*18/100;
    
    this.v2=(parseInt(this.val))+(parseInt(this.v1));
    
    
    }
    
    onKey(event:any){
    console.log("AddVouchersComponent -> onKey -> event", event)
    this.val= event.target.value;
    console.log("AddVouchersComponent -> onKey -> this.val", this.val)
    
    if(this.oncheck){
      this.v1=(parseInt(this.val))*18/100;
    
    this.v2=(parseInt(this.val))+(parseInt(this.v1))
    }else{
    
      this.v2 = this.val;
    
    }
    
    }
    


}

