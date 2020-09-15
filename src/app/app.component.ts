import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'adminPannel';
  toggle: boolean = true;
  sidebar = false;
  currentUrl: string;
  RouteName = {
    "/dashboard": "Home",
    "/calender": "Calendar",
    "/sales": "Sales",
    "/client": "Client",
    "/staff": "Staff",
    "/setup": "Setup",
    "/analytics": "Analytics"
  }

  constructor(router: Router) {
    router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentUrl = event.url;
        // console.log("AppComponent -> constructor ->  this.currentUrl", this.currentUrl);
        this.currentUrl = this.RouteName[`${this.currentUrl}`];
      }
    });
  }

  modelOpenClose(value) {
    this.sidebar = value;
    console.log("close open")
  }
}
