import { Component, OnInit, ViewChild } from '@angular/core';

import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service'
import Swal from 'sweetalert2';
import { NgxSpinnerService } from "ngx-spinner";
import { MatAccordion } from '@angular/material/expansion';


@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  sark: boolean = false;
  droups: boolean = false;
  second: boolean = false;
  third: boolean=false;
  last: boolean=false;
  serviceList : any = [];
  serviceCategoryList :  Array<[]> = [];
  serviceSubCategoryListCache :  Array<[]> = [];
  serviceSubCategoryListToShow :  Array<[]> = [];
  selectedSubCategory : any = "null"; 
  selectedServiceCategory: any = "null"
  durationSelected : any = "null";
  serviceName : String = "";
  servicePrice : Number = 0;
  staffList : any = []
  serve: boolean =false;

  @ViewChild(MatAccordion) accordion: MatAccordion;
  panelOpenState = false;

  constructor(private router: Router, public loginService : LoginService, public spinner : NgxSpinnerService) { }

  ngOnInit(): void {
    this.getServiceList();
  }

  droup() {
    this.droups = !this.droups;
  }

  slideon() {
    this.sark = true;
    this.second = false;
    this.third=false;
  }

  secondon() {
    this.second = true;
    this.sark = false ;
    this.third=false;
  }

  thirdon(){
    this.getServiceCategoryList();
    this.third=true;
    this.sark = false ;
    this.second = false;

  }

  laston(category : any){
    this.getServiceSubCategoryList(category);
    this.getStaffList();
    this.last=true;
    this.third=false;
    this.sark = false ;
    this.second = false;
  }

  closeall(){
    this.last=false;
    this.third=false;
    this.sark = false ;
    this.second = false;
  }


  onService(){
    this.serve= !this.serve;
  }



  getServiceList(){
    this.spinner.show()
    this.loginService.getServiceList().then(res => {
    
      if(res.error == 0 ){        
        if(res.data != null && res.data.items != null){
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

  getServiceCategoryList(){

    this.spinner.show()
    this.loginService.getServiceCategory().then(res => {
      if(res.error == 0 ){        
        if(res.details != null && res.details.data != null){
          this.serviceCategoryList = res.details.data
          console.log("res",res, this.serviceCategoryList)          
        }else{
          this.serviceCategoryList = []
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
        this.serviceCategoryList = []
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

  getServiceSubCategoryList(category) {
    this.spinner.show()
    if (category && category != "") {
      this.selectedServiceCategory = category.id
      this.loginService.getServiceSubCategory().then(res => {
        if (res.error == 0) {
          if (res.details != null && res.details.data != null) {
            this.serviceSubCategoryListCache = res.details.data;
            this.serviceSubCategoryListToShow = this.serviceSubCategoryListCache.filter((element : any) => {
              return element.serv_category_id == category.id
            })
          } else {
            this.serviceSubCategoryListCache = [];
            this.serviceSubCategoryListToShow = [];
          }
          this.spinner.hide()
        } else {
          this.spinner.hide()
          Swal.fire({
            position: 'top-end',
            title: 'Something went wrong!!!',
            showConfirmButton: false,
            timer: 1500
          })
          this.serviceSubCategoryListCache = [];
          this.serviceSubCategoryListToShow = [];
        }
      }).catch(error => {
        this.spinner.hide();
        this.serviceSubCategoryListCache = [];
        this.serviceSubCategoryListToShow = [];
        Swal.fire({
          position: 'top-end',
          title: 'Something went wrong!!!',
          showConfirmButton: false,
          timer: 1500
        })
      })
    } else {
      this.spinner.hide();
      this.serviceSubCategoryListCache = [];
      this.serviceSubCategoryListToShow = [];
      Swal.fire({
        position: 'top-end',
        title: 'Kindly select Category!!!',
        showConfirmButton: false,
        timer: 1500
      })
    }
  }

  selectTreatmentType(event : any){
    this.selectedSubCategory = event.target.value;
  }

  durationSelectChange(event : any){
    this.durationSelected = event.target.value;
  }

  saveService(){
    if(this.serviceName && this.selectedSubCategory && this.durationSelected  && this.servicePrice && (this.serviceName != "") && (this.selectedSubCategory != "null") && (this.durationSelected != "null" )){
      this.spinner.show()
      var objectToSend = {
        "service_id": this.selectedServiceCategory,
        "service_subcategory_id": this.selectedSubCategory,
        "company_id": "15",
        "location_id": "14",
        "display_name": this.serviceName,
        "gender_id": "1",
        "duration": this.durationSelected ,
        "rate": this.servicePrice,
      }

      this.loginService.saveServices(objectToSend).then(res => {
        this.closeall();
        if(res.error == 0 ){ 
          console.log("res-- save services",res)       
          // if(res.data != null && res.data.items != null){
          //   this.serviceList = res.data.items.data
          // }else{
          //   this.serviceList = []
          // }
          this.spinner.hide();
  
        }else{
          this.spinner.hide()
          Swal.fire({
            position: 'top-end',     
            title: 'Something went wrong!!!',
            showConfirmButton: false,
            timer: 1500
          })
          // this.serviceList = []
        }
        this.getServiceList()
      }).catch(error => {
        this.spinner.hide()
        Swal.fire({
          position: 'top-end',     
          title: 'Something went wrong!!!',
          showConfirmButton: false,
          timer: 1500
        })
      })

      console.log("this.selectedServiceCategory",objectToSend)

    }else{
      Swal.fire({
        position: 'top-end',
        title: 'Kindly enter valid data!!!',
        showConfirmButton: false,
        timer: 1500
      })
    }
  }

  getStaffList(){
    this.spinner.show()
    this.loginService.getUserList().then(res => {
     
      if(res.error == 0 ){        
        if(res.data != null && res.data.items != null){
          this.staffList = res.data.items.data
          console.log("res",res, this.staffList)          
        }else{
          this.staffList = []
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
        this.staffList = []
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
