import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-transaction',
  templateUrl: './add-transaction.component.html',
  styleUrls: ['./add-transaction.component.scss']
})
export class AddTransactionComponent implements OnInit {
  TransExchange : FormGroup;
  boxshow: boolean =true;
  title1: string ="Between";
  opt: boolean=false;
  boxdefault: boolean =true;
  val: any;
  m1: any;
  m2: any;
  m3: any;
  m4: any;
  m5: any;
  m6: any;
  m7: any;
  m8: any;
  m9: any;
  m10: any;
  md1: any;
  md2: any;
  md3: any;
  md4: any;
  md5: any;
  md6: any;
  md7: any;
  md8: any;
  md9: any;
  md10: any;
  total: number=0;
  total1: number=0;
  purpose: boolean =false;
  note: boolean=true;
  invoice: boolean=false;
  handover: boolean= false;
  titless: any = 'Terminal 1';
  // title12: string = "Confirm available balance in Terminal 1";
  constructor() { }

  ngOnInit(): void {
    this.TransExchange = new FormGroup ({
      exchange : new FormControl ('Exchange'),
      titles :new FormControl ('Terminal 1')
    })
    
  }

  changesbox(event){
  console.log("AddTransactionComponent -> changesbox -> event", event)
  const data1 =event.value;
  console.log("AddTransactionComponent -> changesbox -> data1", data1)

  
  if('Exchange' === data1){
    this.boxshow = true;
    this. title1 = "Between"
                              
    this.boxdefault = true; 
    this.note = true; 
    this.purpose = false;
    this.handover= false;


    this.titless = "Terminal 1"
    
  }
  if('Borrow' === data1){
    this.boxshow = false;
    this. title1 = "From"

    this.boxdefault = true;
    this.note = true;
    this.purpose = false;
    this.handover= false;

    this.titless = " ";

  }if('lend' == data1){
    this.boxshow = false;
    this.title1 = 'To'

    this.boxdefault = true;
    this.note = true;
    this.purpose = false;
    this.handover= false;

    this.titless = " ";

  }if('Recover'== data1){
    this.boxshow = false;
    this.title1 = 'From'

    this.boxdefault = true;
    this.note = true;
    this.purpose = false;
    this.handover= false;
    this.titless = " ";

  }if('Back'== data1){
    this.boxshow = false;
    this.title1 = 'To'

    this.boxdefault = true;
    this.note = true;
    this.purpose = false;
    this.handover= false;
    this.titless = " ";
  }
  if('Petty'== data1){
    this.boxshow = false;
    this.title1 = 'To'

    this.boxdefault = true;
    this.note = false;
    this.purpose = true;
    this.handover= false;
    this.titless = " ";
   

  }if('Handover'== data1){  
    this.boxshow = false;
    // this.title12 = 'Confirm available balance in Terminal 1'
    this.boxdefault = true;
    this.purpose = false;
    this.note = false;
    this.handover = true;
    this.titless = " ";
  }

  }

  addition(event,value){
    this.val=event.target.value;

    if(value==2000){
      this.m1 = 2000 * (parseInt(this.val));
      this.total=this.total + (parseInt(this.m1));
    }
    if(value==500){
      this.m2 = 500 * (parseInt(this.val))
      this.total=this.total + (parseInt(this.m2));
    }
    if(value==200){
      this.m3 = 200 * (parseInt(this.val));
      this.total=this.total + (parseInt(this.m3));
    }
    if(value==100){
      this.m4 = 100 * (parseInt(this.val));
      this.total=this.total + (parseInt(this.m4));
    }
    if(value==50){
      this.m5 = 50 * (parseInt(this.val));
      this.total=this.total + (parseInt(this.m5));
    }
    if(value==20){
      this.m6 = 20 * (parseInt(this.val));
      this.total=this.total + (parseInt(this.m6));
    }
    if(value==10){
      this.m7 = 10 * (parseInt(this.val));
      this.total=this.total + (parseInt(this.m7));
    }
    if(value==5){
      this.m8 = 5 * (parseInt(this.val));
      this.total=this.total + (parseInt(this.m8));
    }
    if(value==2){
      this.m9 = 2 * (parseInt(this.val));
      this.total=this.total + (parseInt(this.m9));
    }
    if(value==1){
      this.m10 = 1 * (parseInt(this.val))
      this.total=this.total + (parseInt(this.m10));
    }
  }
  
  addition1(event,value){
    this.val=event.target.value;

    if(value==2000){
      this.md1 = 2000 * (parseInt(this.val));
      this.total1 = this.total1 + (parseInt(this.md1));
    }
    if(value==500){
      this.md2 = 500 * (parseInt(this.val));
      this.total1 = this.total1 + (parseInt(this.md2));
    }
    if(value==200){
      this.md3 = 200 * (parseInt(this.val));
      this.total1 = this.total1 + (parseInt(this.md3));
    }
    if(value==100){
      this.md4 = 100 * (parseInt(this.val));
      this.total1 = this.total1 + (parseInt(this.md4));
    }
    if(value==50){
      this.md5 = 50 * (parseInt(this.val));
      this.total1 = this.total1 + (parseInt(this.md5));
    }
    if(value==20){
      this.md6 = 20 * (parseInt(this.val));
      this.total1 = this.total1 + (parseInt(this.md6));
    }
    if(value==10){
      this.md7 = 10 * (parseInt(this.val));
      this.total1 = this.total1 + (parseInt(this.md7));
    }
    if(value==5){
      this.md8 = 5 * (parseInt(this.val));
      this.total1 = this.total1 + (parseInt(this.md8));
    }
    if(value==2){
      this.md9 = 2 * (parseInt(this.val));
      this.total1 = this.total1 + (parseInt(this.md9));
    }
    if(value==1){
      this.md10 = 1 * (parseInt(this.val));
      this.total1 = this.total1 + (parseInt(this.md10));
    }
  }



}
