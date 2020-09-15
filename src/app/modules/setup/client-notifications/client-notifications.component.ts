import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-notifications',
  templateUrl: './client-notifications.component.html',
  styleUrls: ['./client-notifications.component.scss']
})
export class ClientNotificationsComponent implements OnInit {
  show: boolean=true;

  constructor() { }

  ngOnInit(): void {
  }

  funo(){
    this.show=true;
  }
  funcl(){
    this.show=false;
  }

}
