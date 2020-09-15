import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../../services/login.service'
import Swal from 'sweetalert2';
import { NgxSpinnerService } from "ngx-spinner";


@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit {
  sark:boolean=false;
  next: boolean= false;
  second: boolean=false;
  serviceCategoryList :  Array<[]> = []

  constructor(private router: Router, public loginService : LoginService, public spinner : NgxSpinnerService) { }

  ngOnInit(): void {
    console.log("services- services")
    this.getServiceCategoryList()
  }

  slideon(){
    this.sark=true;
  }
  slideoff(){
    this.sark=false;
    this.next=false;
    this.second=false;
  }

  nexton(){
    this.next=!this.next;
  }
  
  secondon(){
    this.second=!this.second;
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
}
