import { AddTerminalsComponent } from './add-terminals/add-terminals.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-terminals',
  templateUrl: './terminals.component.html',
  styleUrls: ['./terminals.component.scss']
})
export class TerminalsComponent implements OnInit {

  drp: boolean;
  searchText: any;
  droups: boolean = false;
  multi: boolean = false;
  selectedOption = 'All';
 
  displayedColumns: string[] = ['terminal', 'mac','ip', 'access','manager','id'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }
  
 

  

  constructor(public router : Router , public dialog: MatDialog) { 
  
  
  }
  

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
    // console.log("AddStationComponent -> openDialog -> status", status)
    const dialogRef = this.dialog.open(AddTerminalsComponent, {
      width: '80%',
      data : status
      
    });
    
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  };
 
}


export interface PeriodicElement {
  terminal: string;
  mac : string;
  ip: string;
  access: string;
  manager:string;
  id:string;
  
}

const ELEMENT_DATA: PeriodicElement[] = [
 
  {terminal:'Terminal 1', mac:'', ip:'', access:'Priti', manager:'Priti',id:'1'}
 
];