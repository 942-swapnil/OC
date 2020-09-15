// import { SetupComponent } from './modules/setup/setup.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DashbordComponent } from './component/dashbord/dashbord.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AnalyticsComponent } from './modules/analytics/analytics.component';
import { StaffComponent } from './modules/staff/staff.component';
import { ServicesComponent } from './modules/services/services.component';
import { MaterialModule } from './shared/material-module/material-module.module';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './component/login/login.component';
import { RegistrationComponent } from './component/registration/registration.component';
import { ForgotPasswordComponent } from './component/forgot-password/forgot-password.component';
import { AnalyticsModule } from './modules/analytics/analytics.module';
import { CalenderModule } from './modules/calender/calender.module';
import { ClientModule } from './modules/client/client.module';
import { SalesModule } from './modules/sales/sales.module';
import { ServicesModule } from './modules/services/services.module';
import { SetupModule } from './modules/setup/setup.module';
import { StaffModule } from './modules/staff/staff.module';
import { FullCalendarModule } from '@fullcalendar/angular';
import { layoutModule } from './component/layout/layout.module';
import { InventoryComponent } from './modules/inventory/inventory.component';
import { InventoryModule } from './modules/inventory/inventory.module';
import {FormsModule , ReactiveFormsModule} from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';

import { NgxSpinnerModule } from "ngx-spinner";
import { AppointmentsComponent } from './modules/appointments/appointments.component';
import { LoginService } from './services/login.service';
import { HttpClientModule } from '@angular/common/http';
import { AuthInterceptor } from './authorization/interceptorconfig';
import { MAT_SELECT_SCROLL_STRATEGY } from '@angular/material/select';
import { SearchBusinessComponent } from './component/search-business/search-business.component';
// import { CarouselModule } from 'ngx-owl-carousel-o';
import { CarouselModule } from 'ngx-owl-carousel-o';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashbordComponent,
    AnalyticsComponent,
    StaffComponent,
    ServicesComponent,
    LoginComponent,
    RegistrationComponent,
    ForgotPasswordComponent,
    InventoryComponent,
    AppointmentsComponent,
    SearchBusinessComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FullCalendarModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    MaterialModule,
    CarouselModule

    
  ],
  providers: [LoginService ,  {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
