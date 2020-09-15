import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl , Validators , FormBuilder } from '@angular/forms'
import { NgxSpinnerService } from "ngx-spinner";
import Swal from 'sweetalert2';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  opm: boolean=false;
  sdd: boolean=true;
  userForm : FormGroup;

  constructor(public formBuilder: FormBuilder, public spinner : NgxSpinnerService, public loginService : LoginService , public router : Router) { }
  

  ngOnInit(): void {

    this.inititaliseUserForm()

  }
  opmodal(){
    this.router.navigate(['/contacts']);
  }
  address(){
    this.sdd=false;
  }
  personal(){
    this.sdd=true;
  }

  inititaliseUserForm(){
    this.userForm = this.formBuilder.group({
      "company_id" : new FormControl("15"),
      "location_id" : new FormControl("14"),
      "email" : new FormControl(""),
      "fname" : new FormControl(""),
      "lname" : new FormControl(""),
      "mobile" : new FormControl(""),
      "telephone" : new FormControl(""),
      "mobileNumberCountryCode" : new FormControl(""),
      "teleNumberCountryCode" : new FormControl("")
    })
  }

  registerClient(){
    this.spinner.show()
    this.loginService.registerClients(this.userForm.value).then(res => {
      if(res.error == 0 ){
        console.log("user client registreed", res)
        this.spinner.hide();
        this.router.navigate(['/client']);
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

}
