import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-station',
  templateUrl: './add-station.component.html',
  styleUrls: ['./add-station.component.scss']
})
export class AddStationComponent implements OnInit {
  
  count = 0;

  display: any;
  show : boolean =false
  add : boolean = false
  displayedColumns11: string[] = ['chair','integument','section', 'code','status','note','action'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.display= data;

   }

  ngOnInit(): void {
  }

  onShow(){
    this.show = !this.show  ;
    this.add = false;
  }

  // onChange(){
  //   this.change = 
  // }

  // onAdd(){
  //   this.add = !this.add;
  //   this.show = false;
  // }
  onChangeEvent(event: any){
    console.log(event.target.value);
  }

  showRow(){
   
  }

}
export interface PeriodicElement {
  section: string;
  Integument : any ;
  chair:string;
  code: string;
  status: string;
  action:string;
  
  // id:string;
  note:string;
  
}

// const ELEMENT_DATA: PeriodicElement[] = [
//   { chair:'S5', Integument:['Chair','Bed','Custome Lable'] ,section: 'Styling Chair5',  code: 'Scode' ,status:'', action:'', note:'fdsfd sdsfsdf', id: '1'},
//   { chair:'S4', Integument:['Chair','Bed','Custome Lable'] ,section: 'Styling Chair4',  code: 'Scode' ,status:'', action:'', note:'ffdv',  id: '2'},
//   { chair:'S3', Integument:['Chair','Bed','Custome Lable'] ,section: 'Styling Chair3',  code: 'Scode' ,status:'', action:'', note:'fdfgd',  id: '3'},
//   {chair:'S2', Integument:['Chair','Bed','Custome Lable'] ,section: 'Styling Chair2',  code: 'Bcode' ,status:'', action:'', note:'dfdv',  id: '4'},
//   {chair:'S1', Integument:['Chair','Bed','Custome Lable'] ,section: 'Styling Chair1',  code: 'Bcode' , status:'', action:'', note:'fvcb',  id: '5'},
  
  
 
// ];

const ELEMENT_DATA: PeriodicElement[] = [
  { chair:'S5', Integument:['Chair','Bed','Custome Lable'] ,section: 'Styling Chair5',  code: 'Scode' ,status:'', action:'', note:'fdsfd sdsfsdfdsddsvdv'},
  { chair:'S4', Integument:['Chair','Bed','Custome Lable'] ,section: 'Styling Chair4',  code: 'Scode' ,status:'', action:'', note:'ffdvsdfsd'},
  { chair:'S3', Integument:['Chair','Bed','Custome Lable'] ,section: 'Styling Chair3',  code: 'Scode' ,status:'', action:'', note:'fdfgdsdfsd'},
  {chair:'S2', Integument:['Chair','Bed','Custome Lable'] ,section: 'Styling Chair2',  code: 'Bcode' ,status:'', action:'', note:'fdsdfsdfvb'},
  {chair:'S1', Integument:['Chair','Bed','Custome Lable'] ,section: 'Styling Chair1',  code: 'Bcode' , status:'', action:'', note:'hyjjutygf'}
  
  
 
];