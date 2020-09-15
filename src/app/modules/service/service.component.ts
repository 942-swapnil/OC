import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

import { MatPaginator } from '@angular/material/paginator';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { MatDialog } from '@angular/material/dialog';
import { AddServiceBoxComponent } from './add-service-box/add-service-box.component';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit {
  panelOpenState = false;
  searchText: any;


  displayedColumns: string[] = ['service_name','duration','rate','action','id'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  displayedColumns1: string[] = ['service_name','for','action','id'];
  dataSource1 = new MatTableDataSource<PeriodicElement1>(ELEMENT_DATA1);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  showPage: boolean = false;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

  constructor(public dialog: MatDialog) { }

  openDialog(status) {
    console.log("ContactsComponent -> openDialog -> status", status)
    const dialogRef = this.dialog.open(AddServiceBoxComponent , {
      // width: '80vh',
      data : status
    });
    
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  };

  // movies = [
  //   {
  //     id: 1,
  //     name:'Male HairCuts',
  //     duration:'30 min',
  //     price: '300 Rs'
  //   },
  //   {
  //     id: 2,
  //     name:'Female HairCuts',
  //     duration:'30 min',
  //     price: '300 Rs'
  //   },
  //   {
  //     id: 1,
  //     name:'Prince HairCuts',
  //     duration:'30 min',
  //     price: '300 Rs'
  //   },
  //   {
  //     id: 1,
  //     name:'Princess HairCuts',
  //     duration:'30 min',
  //     price: '300 Rs'
  //   }
    // 'Episode I - The Phantom Menace',
    // 'Episode II - Attack of the Clones',
    // 'Episode III - Revenge of the Sith',
    // 'Episode IV - A New Hope',
    // 'Episode V - The Empire Strikes Back',
    // 'Episode VI - Return of the Jedi',
    // 'Episode VII - The Force Awakens',
    // 'Episode VIII - The Last Jedi',
    // 'Episode IX – The Rise of Skywalker'
  // ];
  // movies1 = [
   
  //   'Hair Cuts',
  //   'Waxing',
  //   'Massage',
  //   'NAil Pedicure',
  //   'Make-up',
   
  // ];

  // drop(event: CdkDragDrop<string[]>) {
  //   moveItemInArray(this.movies, event.previousIndex, event.currentIndex);
  // }
  // drop1(event: CdkDragDrop<string[]>) {
  //   moveItemInArray(this.movies1, event.previousIndex, event.currentIndex);
  // }
 
  fullPage(){
    this.showPage= !this.showPage;
  }




}

export interface PeriodicElement {
  service_name: string;
  rate : string;
  duration: string;
  action:string;
  id:string;
  
}

const ELEMENT_DATA: PeriodicElement[] = [
  {service_name: 'Male Hair Cutting', rate:'50 Rs' , duration:'20 min',action:'Remove', id: '1'},
  {service_name: 'Female Hair Cutting', rate:'70 Rs' , duration:'30 min',action:'Remove', id: '2'},
  {service_name: 'Hair cut Princess', rate:'150 Rs' , duration:'45 min',action:'Remove', id: '3'},
  {service_name: 'Hair cut Prince', rate:'100 Rs' , duration:'40 min',action:'Remove', id: '4'},
  {service_name: 'Baby cut', rate:'150 Rs' , duration:'45 min',action:'Remove', id: '5'},
  {service_name: 'layer cut', rate:'100 Rs' , duration:'40 min',action:'Remove', id: '6'},
 
];

export interface PeriodicElement1 {
  service_name: string;
  for: string;
  action:string;
  // rate : string;
  // duration: string;
  id:string;
}

const ELEMENT_DATA1: PeriodicElement1[] = [
  {service_name: 'Hair',for:'female',action:'', id: '1'},
  {service_name: 'Skin',for:'male',action:'', id: '2'},
  {service_name: 'Body',for:'male',action:'', id: '3'},
];