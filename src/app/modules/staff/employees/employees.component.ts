import { DialogBoxComponent } from './../dialog-box/dialog-box.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup , FormControl , Validators , FormBuilder } from '@angular/forms'
import { NgxSpinnerService } from "ngx-spinner";
import Swal from 'sweetalert2';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router'
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';



@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {
  modls: boolean=false;
  hid: boolean = true;
  userList : any = [];
  employeeDetailsForm : FormGroup;
  serviceList : any = [];
  currentPageNumber : any = 1;
  totalItemsPresent : any = 1;

  currentPagenumberStaffList : any = 1;
  totalItemsStaffList : any = 1;


  displayedColumns: string[] = ['position', 'name','gender','mobile_no','Designation','attendance','id'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

 
  ngOnInit(): void {
    this.initialiseEmployeeForm()
    this.getUserList(this.currentPagenumberStaffList);
    this.getServiceList();

    this.dataSource.paginator = this.paginator;
  }

  

  constructor(public formBuilder: FormBuilder,
              public spinner : NgxSpinnerService, 
              public loginService : LoginService , 
              public router : Router ,
              public dialog: MatDialog) { }
        
              openDialog(status) {
                console.log("ContactsComponent -> openDialog -> status", status)
                const dialogRef = this.dialog.open(DialogBoxComponent , {
                  // width: '80vh',
                  data : status
                  
                });
                
                dialogRef.afterClosed().subscribe(result => {
                  console.log(`Dialog result: ${result}`);
                });
              };



              

  modl(){
    this.modls=!this.modls
  }

  show(){
    this.hid=!this.hid;
  }

  getUserList(pageNumber){
    this.spinner.show()
    this.loginService.getUserListByPageNumber(pageNumber).then(res => {
     
      if(res.error == 0 ){        
        if(res.data != null && res.data.items != null){
          this.currentPagenumberStaffList = res.data.items.current_page;
          this.totalItemsStaffList = res.data.items.total;
          this.userList = res.data.items.data;
          console.log("res",res, this.currentPagenumberStaffList,this.totalItemsStaffList,this.userList)   
          this.spinner.hide()       
         
        }else{
          this.spinner.hide()
          this.userList = []
        }
       
      }else{
        this.spinner.hide()
        Swal.fire({
          position: 'top-end',     
          title: 'Something went wrong!!!',
          showConfirmButton: false,
          timer: 1500
        })
        this.userList = []
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

  initialiseEmployeeForm(){
    this.employeeDetailsForm = this.formBuilder.group({
      "from_date": new FormControl(""),
      "to_date": new FormControl(""),
      "company_id": new FormControl("15"),
      "location_id": new FormControl("14"),
      "email": new FormControl(""),
      "first_name": new FormControl(""),
      "last_name": new FormControl(""),
      "mobile": new FormControl(""),
      "username" :  new FormControl(""),
    })
  }

  submitForm(){
    console.log("form",this.employeeDetailsForm.value)
    this.employeeDetailsForm.value.username = this.employeeDetailsForm.value.first_name + this.employeeDetailsForm.value.last_name


    this.spinner.show()

    this.loginService.saveStaffUser(this.employeeDetailsForm.value).then(res => {
      if(res.error == 0 ){        
      console.log("rres", res)
        this.spinner.hide()
      }else{
        this.spinner.hide()
        Swal.fire({
          position: 'top-end',     
          title: 'Something went wrong!!!',
          showConfirmButton: false,
          timer: 1500
        })
   
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

  getServiceList(){
    this.spinner.show()
    this.loginService.getServiceListByPageNumber(this.currentPageNumber).then(res => {
    
      if(res.error == 0 ){        
        if(res.data != null && res.data.items != null){
          this.currentPageNumber  = res.data.items.current_page;
          this.totalItemsPresent = res.data.items.total;
          this.serviceList = res.data.items.data
        }else{
          this.serviceList = []
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
        this.serviceList = []
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

  pageChangedEvent(event){
    this.currentPageNumber= event
    this.spinner.show()
    this.getServiceList();
  }

  selectService(event){
    console.log("event", event.target)
  }

  pageChangedStaffListEvent(event){
    this.currentPagenumberStaffList= event
    this.spinner.show()
    this.getServiceList();
  }

  editStaff(userDetails){
    this.modls = true;
    this.employeeDetailsForm.reset();
   
    this.employeeDetailsForm.controls.from_date.setValue("");
    this.employeeDetailsForm.controls.to_date.setValue("");
    this.employeeDetailsForm.controls.company_id.setValue("15");
    this.employeeDetailsForm.controls.location_id.setValue("4");
    this.employeeDetailsForm.controls.email.setValue(userDetails.email ? userDetails.email : "");
    this.employeeDetailsForm.controls.first_name.setValue(userDetails.profile ? (userDetails.profile.first_name ? userDetails.profile.first_name : "") : "");
    this.employeeDetailsForm.controls.last_name.setValue(userDetails.profile ? (userDetails.profile.last_name ? userDetails.profile.last_name : "") : "");
    this.employeeDetailsForm.controls.mobile.setValue(userDetails.profile ? (userDetails.profile.mobile ? userDetails.profile.mobile : "") : "");
    this.employeeDetailsForm.controls.username.setValue(userDetails.username ? userDetails.username : "");
  }

}


export interface PeriodicElement {
  name: string;
  position: number;
  gender : string;
  mobile_no: number;
  Designation: string;
  attendance: string;
  id:string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Anjali Sharma', gender:'Female' , mobile_no: 3669988552 ,Designation:'Hairdresser',attendance:'Present', id: '1'},
  {position: 2, name: 'Anjali Sharma', gender:'Female' , mobile_no: 3669988552 ,Designation:'Hairdresser',attendance:'Present', id: '2'},
  {position: 3, name: 'Anjali Sharma', gender:'Female' , mobile_no: 3669988552 ,Designation:'Hairdresser',attendance:'Present', id: '3'},
  {position: 4, name: 'Anjali Sharma', gender:'Female' , mobile_no: 3669988552 ,Designation:'Hairdresser',attendance:'Present', id: '4'},
  {position: 5, name: 'Anjali Sharma', gender:'Female' , mobile_no: 3669988552 ,Designation:'Hairdresser',attendance:'Present', id: '5'},
  {position: 6, name: 'Anjali Sharma', gender:'Female' , mobile_no: 3669988552 ,Designation:'Hairdresser',attendance:'Present', id: '6'},
  {position: 7, name: 'Anjali Sharma', gender:'Female' , mobile_no: 3669988552 ,Designation:'Hairdresser',attendance:'Present', id: '7'},
  {position: 8, name: 'Anjali Sharma', gender:'Female' , mobile_no: 3669988552 ,Designation:'Hairdresser',attendance:'Present', id: '8'},
 
];