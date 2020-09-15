import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl , Validators , FormBuilder } from '@angular/forms'
import { NgxSpinnerService } from "ngx-spinner";
import Swal from 'sweetalert2';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginfield: boolean =false;

  constructor(public formBuilder: FormBuilder, public spinner : NgxSpinnerService, public loginService : LoginService , public router : Router) { }
  
  loginForm : FormGroup


  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      user_id : new FormControl("",[Validators.required]),
      password : new FormControl("",[Validators.required])
    })
  }

  login(){
    // this.router
    this.spinner.show();
    console.log("spinner showed" , this.loginForm.value)

    this.loginService.login(this.loginForm.value).then(res => {
      console.log("res",res)
      this.spinner.hide();
      if(res.error == 0 && res.details != null){        
        Swal.fire( {position: 'top-end',     
        title: res.message,
        showConfirmButton: false,
        timer: 1500});

        sessionStorage.setItem('Authorization',"Bearer" + " " + res.access_token)
        sessionStorage.setItem('userId' , res.details.id)

        this.router.navigate(['/dashboard'])

      }else{
        Swal.fire( {position: 'top-end',     
        title: res.message,
        showConfirmButton: false,
        timer: 1500})
      }   

    }).catch(error => {
      this.spinner.hide();
      Swal.fire({
        position: 'top-end',     
        title: 'Something went wrong!!!',
        showConfirmButton: false,
        timer: 1500
      })
    })  

    // setTimeout(() => {
    //   this.spinner.hide();
    //   Swal.fire( {position: 'top-end',     
    //   title: 'Your work has been saved',
    //   showConfirmButton: false,
    //   timer: 1500})
    // }, 3000);

  }

  loginChange(){
    this.loginfield = !this.loginfield
  }

 
  

}
