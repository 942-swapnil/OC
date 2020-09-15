import { LoginComponent } from './component/login/login.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashbordComponent } from './component/dashbord/dashbord.component';
import { RegistrationComponent } from './component/registration/registration.component';
import { ForgotPasswordComponent } from './component/forgot-password/forgot-password.component';
import { AppComponent } from './app.component';
import { ROUTER_CONFIG } from './shared/router-config/router.config';
import { SearchBusinessComponent } from './component/search-business/search-business.component';


const routes: Routes = [
  // { path: '', redirectTo: "/dashboard", pathMatch: "full" },
  { path: '', redirectTo: "/login" , pathMatch: "full"},

  { path: ROUTER_CONFIG.ForgotPassword, component: ForgotPasswordComponent },
  { path: ROUTER_CONFIG.LOGIN, component: LoginComponent },
  { path: ROUTER_CONFIG.REGISTER, component: RegistrationComponent },
  
  { path: '', component : AppComponent },
  { path: 'SearchBusiness', component : SearchBusinessComponent },


  { path: '' , loadChildren: () => import('./component/layout/layout.module').then(l => l.layoutModule)},
  // { path: 'login', component: LoginComponent },
  // { path: 'dashboard', component: DashbordComponent },
  // { path:'login', component:LoginComponent},
  // { path:'forgot-password', component:ForgotPasswordComponent},
  // { path :'registration', component:RegistrationComponent},
  // { path: 'calender', loadChildren: () => import('./modules/calender/calender.module').then(c => c.CalenderModule)},
  // { path: 'sales', loadChildren: () => import('./modules/sales/sales.module').then(s => s.SalesModule) },
  // { path: 'client', loadChildren: () => import('./modules/client/client.module').then(c => c.ClientModule) },
  // { path: 'analytics', loadChildren: () => import('./modules/analytics/analytics.module').then(a => a.AnalyticsModule) },
  // { path: 'setup', loadChildren: () => import('./modules/setup/setup.module').then(s => s.SetupModule) },
  // { path: 'staff', loadChildren: () => import('./modules/staff/staff.module').then(s => s.StaffModule) },
  // { path: 'services', loadChildren: () => import('./modules/services/services.module').then(s => s.ServicesModule) }
  // { path: 'inventory', loadChildren: () => import('./modules/inventory/inventory.module').then(i=> i.InventoryModule) }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
