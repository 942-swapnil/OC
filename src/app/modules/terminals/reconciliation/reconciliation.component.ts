import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reconciliation',
  templateUrl: './reconciliation.component.html',
  styleUrls: ['./reconciliation.component.scss']
})
export class ReconciliationComponent implements OnInit {
  
  val1: any;
  val2: any;
  v12: any;
  v13: any;
  vz1: any;
  vz2: any;
  vz: any;
  vz9: any;
  vz8: any;
  vz7: any;
  vz6: any;
  vz5: any;
  vz4: any;
  vz3: any;
  vz10: any;
  total: number =0 ;


  constructor() { }

  ngOnInit(): void {
  }

  

  changevalue(event,value){
    console.log("AddTerminalsComponent -> changevalue -> value", value)
    const vc1 = event.target.value;
    console.log("AddTerminalsComponent -> changevalue -> vc1", vc1)

    if(value == 2000){
      this.vz1 = parseInt(vc1)*parseInt(value);
      this.total = this.total + this.vz1;
    }
    else if(value == 500){
      this.vz2 = parseInt(vc1)*parseInt(value);
      this.total = this.total + this.vz2;
    }
    else if(value == 200){
      this.vz3 = parseInt(vc1)*parseInt(value);
      this.total = this.total + this.vz3;
    }
    else if(value == 100){
      this.vz4 = parseInt(vc1)*parseInt(value);
      this.total = this.total + this.vz4;
    }
    else if(value == 50){
      this.vz5 = parseInt(vc1)*parseInt(value);
      this.total = this.total + this.vz5;
    }
    else if(value == 20){
      this.vz6 = parseInt(vc1)*parseInt(value);
      this.total = this.total + this.vz6;
    }
    else if(value == 10){
      this.vz7 = parseInt(vc1)*parseInt(value);
      this.total = this.total + this.vz7;
    }
    else if(value == 5){
      this.vz8 = parseInt(vc1)*parseInt(value);
      this.total = this.total + this.vz8;
    }
    else if(value == 2){
      this.vz9 = parseInt(vc1)*parseInt(value);
      this.total = this.total + this.vz9;
    }
    else if(value == 1){
      this.vz10 = parseInt(vc1)*parseInt(value);
      this.total = this.total + this.vz10;
    }
    
  }

  
}

