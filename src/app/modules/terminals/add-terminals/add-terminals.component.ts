import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-add-terminals',
  templateUrl: './add-terminals.component.html',
  styleUrls: ['./add-terminals.component.scss']
})
export class AddTerminalsComponent implements OnInit {
  displayedColumns: string[] = [ 'exchange','critical', 'standard'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  tbl: boolean=false;
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


  constructor() { }

  ngOnInit(): void {
  }

  open(value){
    if(value=='t'){
      this.tbl=true;
    }
    else if(value=='f'){
      this.tbl=false;
    }

  }


  changevalue(event,value){
    console.log("AddTerminalsComponent -> changevalue -> value", value)
    const vc1 = event.target.value;
    console.log("AddTerminalsComponent -> changevalue -> vc1", vc1)

    if(value == 2000){
      this.vz1 = parseInt(vc1)*parseInt(value);
    }
    else if(value == 500){
      this.vz2 = parseInt(vc1)*parseInt(value);
    }
    else if(value == 200){
      this.vz3 = parseInt(vc1)*parseInt(value);
    }
    else if(value == 100){
      this.vz4 = parseInt(vc1)*parseInt(value);
    }
    else if(value == 50){
      this.vz5 = parseInt(vc1)*parseInt(value);
    }
    else if(value == 20){
      this.vz6 = parseInt(vc1)*parseInt(value);
    }
    else if(value == 10){
      this.vz7 = parseInt(vc1)*parseInt(value);
    }
    else if(value == 5){
      this.vz8 = parseInt(vc1)*parseInt(value);
    }
    else if(value == 2){
      this.vz9 = parseInt(vc1)*parseInt(value);
    }
    else if(value == 1){
      this.vz10 = parseInt(vc1)*parseInt(value);
    }
  }

  onIn(event:any){
  console.log("AddTerminalsComponent -> onIn -> event", event)
  this.val1 = event.target.value;

    this.v12=2000*(parseInt(this.val1));
    }

}
export interface PeriodicElement {
  // terminal: string;
  exchange : string;
  critical: string;
  standard: string;
  // id:string;
  
}

const ELEMENT_DATA: PeriodicElement[] = [
 
  // { exchange:'2000', critical:'NA', standard:'NA'},
  { exchange:'500', critical:'15', standard:'12'},
  { exchange:'200', critical:'15', standard:'12'},
  { exchange:'100', critical:'15', standard:'12'},
  { exchange:'50', critical:'15', standard:'12'},
  { exchange:'20', critical:'15', standard:'12'},
  { exchange:'10', critical:'15', standard:'12'},
  { exchange:'5', critical:'15', standard:'12'},
  { exchange:'2', critical:'15', standard:'12'}
];