import { AddMembershipComponent } from './add-membership/add-membership.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-membership',
  templateUrl: './membership.component.html',
  styleUrls: ['./membership.component.scss']
})
export class MembershipComponent implements OnInit {

drp: boolean;
  searchText: any;
  droups: boolean = false;
  multi: boolean = false;
  selectedOption = 'All';
 
  displayedColumns: string[] = ['membership', 'discount','rate', 'gst','price','FRFI','Validity','id'];
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
  console.log("MembershipComponent -> openDialog -> status", status)
    const dialogRef = this.dialog.open(AddMembershipComponent, {
      // width: '80%',
      data : status
      
    });
    
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  };
 
}


export interface PeriodicElement {
  membership: string;
  discount : string;
  rate: string;
  gst: string;
  price:string;
  FRFI: string;
  Validity: string;
  id:string;
  
}

const ELEMENT_DATA: PeriodicElement[] = [
 
  {membership:'Silver Card', discount:'10%', rate:'Rs. 300', gst:'N/A', price:'Rs. 300', FRFI:'Yes', Validity:'1 Year',id:'1'},
  {membership:'Golden Card', discount:'15%', rate:'Rs. 500', gst:'N/A', price:'Rs. 500', FRFI:'No', Validity:'1 Year',id:'2'}
 
];