import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.scss']
})
export class StaffComponent implements OnInit {
  hide: any = true;
  mon: boolean=false;
  modls: boolean=false;

  constructor() { 
    
  }

  ngOnInit(): void {
  }
onDisplay(){
  this.hide=false;
}

sun(){
  this.mon=!this.mon;
}
modl(){
  this.modls = !this.modls;
  this.hide=true;
}

}
