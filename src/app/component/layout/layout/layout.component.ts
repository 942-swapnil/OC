import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  title = 'adminPannel';
  toggle: boolean = true;
  sidebar = false;
  currentUrl: string;
  RouteName = {
    "/dashboard": "Home",
    "/calender": "Calendar",
    "/sales": "Sales",
    "/staff": "Team",
    "/setup": "Setup",
    "/analytics": "Analytics",
    "/contacts": "Contacts",
    "/vendors" : "Vendors",
    "/service" : "Services",
    "/Profile" : "Profile",
    "/Brand" : "Brand",
    "/Outlet" : "Outlet",
    "/stations" :"Stations",
    "/loyalty/offers": "Offers",
    "/loyalty/membership": "Membership",
    "/loyalty/vouchers": "Vouchers",
    "/reports/cash": "Cash Flow"

  }
  loyal: boolean =false;
  cont: boolean = false;
  Inventory: boolean= false;
  report: boolean = false;
  prof: boolean;


  constructor(router: Router) {
    router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentUrl = event.url;
        // console.log("AppComponent -> constructor ->  this.currentUrl", this.currentUrl);
        this.currentUrl = this.RouteName[`${this.currentUrl}`];
      }
    });
   }

  ngOnInit(): void {
  }
  modelOpenClose(value) {
    this.sidebar = value;
    console.log("close open")
  }
  loyaltyDrop(){
    this.loyal=!this.loyal;
  }
  contactDrop(){
    this.cont= !this.cont; 
  }
  InventoryDrop(){
    this.Inventory= !this.Inventory;
  }
  reportDrop(){
    this.report=!this.report;
  }
  profileDrop(){
    this.prof= !this.prof;
  }
}
