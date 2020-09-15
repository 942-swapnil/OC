import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service'
import Swal from 'sweetalert2';
import { NgxSpinnerService } from "ngx-spinner";
import { MatDialog } from '@angular/material/dialog';
import { AddDialogBoxComponent } from './add-dialog-box/add-dialog-box.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {
  tital='Client';
  drp: boolean=false;
  clientList : any;
  // currentPageNumber : Number;
  searchText : any = "";
  currentPageNumber : any = 0;
  totalItemsPresent : any = 0;


  displayedColumns: string[] = ['position', 'name','gender', 'mobile_no','last_visit','frequency','id'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;




  constructor(private router: Router, public loginService : LoginService, public spinner : NgxSpinnerService , public dialog: MatDialog) { }


  openDialog() {
    const dialogRef = this.dialog.open(AddDialogBoxComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }




  ngOnInit(): void {
    this.spinner.show()
    this.loginService.getClientList().then(res => {
     
      if(res.error == 0 ){        
        if(res.data != null && res.data.items != null){
          this.currentPageNumber  = res.data.items.current_page;
          this.totalItemsPresent = res.data.items.total;
          this.clientList = res.data.items.data; 
          console.log("res",res, this.clientList)          
        }else{
          this.currentPageNumber  = 0;
          this.totalItemsPresent = 0;
          this.clientList = [];
         
        }
        this.spinner.hide()
      }else{
        this.spinner.hide()
        Swal.fire({
          position: 'top-end',     
          title: 'Something went wrong!!!',
          showConfirmButton: false,
          timer: 1500
        })
        this.clientList = [];
        this.currentPageNumber  = 0;
        this.totalItemsPresent = 0;
      }
    }).catch(error => {
      this.spinner.hide()
      Swal.fire({
        position: 'top-end',     
        title: 'Something went wrong!!!',
        showConfirmButton: false,
        timer: 1500
      })
    })



    this.dataSource.paginator = this.paginator;
  }


  gotoList() {
    this.router.navigate(['/client/add']);
  }

  onclickDropdwn(){
    this.drp=!this.drp;
  }

  pageChangedEvent(event){

    this.spinner.show()
    this.loginService.getClientListForPage(event).then(res => {
     
      if(res.error == 0 ){        
        if(res.data != null && res.data.items != null){
          this.currentPageNumber  = res.data.items.current_page;
          this.totalItemsPresent = res.data.items.total;
          this.clientList = res.data.items.data; 
          console.log("res",res, this.clientList)          
        }else{
          this.currentPageNumber  = 0;
          this.totalItemsPresent = 0;
          this.clientList = [];
         
        }
        this.spinner.hide()
      }else{
        this.spinner.hide()
        Swal.fire({
          position: 'top-end',     
          title: 'Something went wrong!!!',
          showConfirmButton: false,
          timer: 1500
        })
        this.clientList = [];
        this.currentPageNumber  = 0;
        this.totalItemsPresent = 0;
      }
    }).catch(error => {
      this.spinner.hide()
      Swal.fire({
        position: 'top-end',     
        title: 'Something went wrong!!!',
        showConfirmButton: false,
        timer: 1500
      })
    })



  }

}


export interface PeriodicElement {
  name: string;
  position: number;
  gender : string;
  mobile_no: number;
  
  frequency: string;
  id:string;
  last_visit:string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Anjali Sharma', gender:'Female' , mobile_no: 3669988552 ,last_visit:'01-June-2020',frequency:'one in a month', id: '1'},
  {position: 2, name: 'Anjali Sharma', gender:'Female' , mobile_no: 3669988552 ,last_visit:'01-June-2020',frequency:'one in a month', id: '2'},
  {position: 3, name: 'Anjali Sharma', gender:'Female' , mobile_no: 3669988552 ,last_visit:'01-June-2020',frequency:'one in a month', id: '3'},
  {position: 4, name: 'Anjali Sharma', gender:'Female' , mobile_no: 3669988552 ,last_visit:'01-June-2020',frequency:'one in a month', id: '4'},
  {position: 5, name: 'Anjali Sharma', gender:'Female' , mobile_no: 3669988552 ,last_visit:'01-June-2020',frequency:'one in a month', id: '5'},
  {position: 6, name: 'Anjali Sharma', gender:'Female' , mobile_no: 3669988552 ,last_visit:'01-June-2020',frequency:'one in a month', id: '6'},
  {position: 7, name: 'Anjali Sharma', gender:'Female' , mobile_no: 3669988552 ,last_visit:'01-June-2020',frequency:'one in a month', id: '7'},
  {position: 8, name: 'Anjali Sharma', gender:'Female' , mobile_no: 3669988552 ,last_visit:'01-June-2020',frequency:'one in a month', id: '8'},
 
];
