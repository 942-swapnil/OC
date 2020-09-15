import { EmployeeModule } from './../../modules/employee/employee.module';
import { LooseChangeComponent } from './../../modules/terminals/loose-change/loose-change.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ROUTER_CONFIG } from '../../shared/router-config/router.config'
import { LayoutComponent } from './layout/layout.component';
import { DashbordComponent } from '../dashbord/dashbord.component';
// import { ForgotPasswordComponent } from '../forgot-password/forgot-password.component';
// import { LoginComponent } from '../login/login.component';
// import { RegistrationComponent } from '../registration/registration.component';

const routes: Routes = [
    // { path: '', redirectTo: 'login', pathMatch: 'full' },

    // { path: '', redirectTo: "/dashboard", pathMatch: "full" },
    // { path: ROUTER_CONFIG.Dashboard, component: DashbordComponent },



    {
        path: "", component: LayoutComponent,
        children: [
            { path: ROUTER_CONFIG.Dashboard, component: DashbordComponent },
            { path: 'calender', loadChildren: () => import('../../modules/calender/calender.module').then(c => c.CalenderModule) },
            { path: 'sales', loadChildren: () => import('../../modules/sales/sales.module').then(s => s.SalesModule) },
            { path: 'client', loadChildren: () => import('../../modules/client/client.module').then(c => c.ClientModule) },
            { path: 'analytics', loadChildren: () => import('../../modules/analytics/analytics.module').then(a => a.AnalyticsModule) },
            { path: 'setup', loadChildren: () => import('../../modules/setup/setup.module').then(s => s.SetupModule) },
            { path: 'staff', loadChildren: () => import('../../modules/staff/staff.module').then(s => s.StaffModule) },
            { path: 'services', loadChildren: () => import('../../modules/services/services.module').then(s => s.ServicesModule) },
            { path: 'inventory', loadChildren: () => import('../../modules/inventory/inventory.module').then(i => i.InventoryModule) },
            { path: 'appointments', loadChildren: () => import('../../modules/appointments/appointments.module').then(a => a.AppointmentsModule) },
            { path: 'contacts', loadChildren: () => import('../../modules/contacts/contacts.module').then(c => c.ContactsModule) },
            { path: 'vendors', loadChildren : () => import ('../../modules/vendors/vendors.module').then(v => v.VendorsModule) },
            { path: 'service', loadChildren: () => import('../../modules/service/service.module').then(s => s.ServiceModule) },
            { path: 'Profile', loadChildren: ()=> import ('../../modules/company-profile/company-profile.module').then(c=>c.CompanyProfileModule)},
            { path: 'Brand', loadChildren : ()=> import ('../../modules/brand/brand.module').then(b=>b.BrandModule) },
            { path: 'Outlet', loadChildren : ()=> import ('../../modules/outlet/outlet.module').then(o=>o.OutletModule)},
            { path: 'stations', loadChildren:() => import('../../modules/stations/stations.module').then(s =>s.StationsModule)},
            { path: 'loyalty', loadChildren:() => import('../../modules/loyalty/loyalty.module').then(m =>m.LoyaltyModule)},
            { path: 'employee', loadChildren:() => import('../../modules/employee/employee.module').then(e => e.EmployeeModule)},
            { path: 'terminals', loadChildren: () => import('../../modules/terminals/terminals.module').then(t => t.TerminalsModule) },
            { path: 'reports', loadChildren: () => import('../../modules/reports/reports.module').then(r => r.ReportsModule) }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class layoutRoutingModule { }
