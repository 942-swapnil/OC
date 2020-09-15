import { AddStationComponent } from './add-station/add-station.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ContactFormComponent } from '../contacts/contact-form/contact-form.component';

@Component({
  selector: 'app-stations',
  templateUrl: './stations.component.html',
  styleUrls: ['./stations.component.scss']
})
export class StationsComponent implements OnInit {
  drp: boolean;
  searchText: any;
  droups: boolean = false;
  multi: boolean = false;
  selectedOption = 'All';
 
  displayedColumns: string[] = ['section', 'integument','type', 'unit','capacity','id'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }
  
 

  

  constructor(public router : Router , public dialog: MatDialog) { 
  
  
  }

 

  // applyFilter(event: Event) {
  //   const filterValue = (event.target as HTMLInputElement).value;
  //   this.dataSource.filter = filterValue.trim().toLowerCase();

  //   if (this.dataSource.paginator) {
  //     this.dataSource.paginator.firstPage();
  //   }
  // }

  

  gotoList() {
    this.router.navigate(['/contacts/add']);
  }



  onclickDropdwn(){
    this.drp=!this.drp;
  }

  droup(){
    this.droups=!this.droups;
  }

  multiContact(){
    this.multi = !this.multi;
  }


  openDialog(status) {
    console.log("AddStationComponent -> openDialog -> status", status)
    const dialogRef = this.dialog.open(AddStationComponent , {
      width: '80%',
      data : status
      
    });
    
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  };
 
}


export interface PeriodicElement {
  section: string;
  Integument : string;
  type: string;
  unit: string;
  capacity:string;
  // position: number;
  id:string;
  
}

const ELEMENT_DATA: PeriodicElement[] = [
  { section: 'Styling', Integument:'Hair' , type: 'Open' ,unit:'1 section',capacity:'4 Chairs', id: '1'},
  { section: 'Chemical', Integument:'Hair' , type: 'Open' ,unit:'1 section',capacity:'2 Chairs', id: '2'},
  { section: 'Hair Spa', Integument:'Hair' , type: 'close' ,unit:'2 Room',capacity:'3 Chairs', id: '3'},
  { section: 'Wash', Integument:'Hair' , type: 'close' ,unit:'1 section',capacity:'2 Chairs', id: '4'},
  { section: 'Beauty', Integument:'Skin' , type: 'Open' ,unit:'3 Room',capacity:'4 Chairs', id: '5'},

  { section: 'Spa', Integument:'Skin' , type: 'close' ,unit:'2 Room',capacity:'2 Beds', id: '6'},
  
  { section: 'Pedicure', Integument:'Skin' , type: 'Open' ,unit:'1 section',capacity:'3 Chairs', id: '7'},
  {section: 'Make Up', Integument:'Skin' , type: 'close',unit:'1 section',capacity:'4 Chairs', id: '8'},
  { section: 'Nail Bar', Integument:'Nail' , type: 'Open' ,unit:'1 section',capacity:'2 Chairs', id: '9'},
 
];