import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  next: boolean=true;

  constructor() { }

  ngOnInit(): void {
  }
  nextse(){
    this.next=!this.next;
  }

}
