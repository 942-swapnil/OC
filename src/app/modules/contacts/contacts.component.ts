import { ContactFormComponent } from './contact-form/contact-form.component';
import { Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';


@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  drp: boolean;
  searchText: any;
  droups: boolean = false ;
  multi: boolean = false ;
  selectedOption = 'All' ;
 
  displayedColumns: string[] = ['position', 'name','gender', 'mobile_no','labels','frequency','id'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator ;
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
    console.log("ContactsComponent -> openDialog -> status", status)
    const dialogRef = this.dialog.open(ContactFormComponent , {
      // width: '80',
      data : status
      
    });
    
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }; 
}

export interface PeriodicElement {
  name: string;
  position: number;
  gender : string;
  mobile_no: number;
  labels: string;
  frequency: string;
  id:string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Anjali Sharma', gender:'Female' , mobile_no: 3669988552 ,labels:'Client',frequency:'one in a month', id: '1'},
  {position: 2, name: 'Anjali Sharma', gender:'Female' , mobile_no: 3669988552 ,labels:'Client',frequency:'one in a month', id: '2'},
  {position: 3, name: 'Anjali Sharma', gender:'Female' , mobile_no: 3669988552 ,labels:'Client',frequency:'one in a month', id: '3'},
  {position: 4, name: 'Anjali Sharma', gender:'Female' , mobile_no: 3669988552 ,labels:'Client',frequency:'one in a month', id: '4'},
  {position: 5, name: 'Anjali Sharma', gender:'Female' , mobile_no: 3669988552 ,labels:'Client',frequency:'one in a month', id: '5'},
  {position: 6, name: 'Anjali Sharma', gender:'Female' , mobile_no: 3669988552 ,labels:'Client',frequency:'one in a month', id: '6'},
  {position: 7, name: 'Anjali Sharma', gender:'Female' , mobile_no: 3669988552 ,labels:'Client',frequency:'one in a month', id: '7'},
  {position: 8, name: 'Anjali Sharma', gender:'Female' , mobile_no: 3669988552 ,labels:'Client',frequency:'one in a month', id: '8'},
 
];