import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardLayoutComponent } from './layout/dashboard.layout.component';
import { DashboardMenuComponent } from './components/menu/dashboard.menu.component';
import { DashboardMenuitemComponent } from './components/menu/dashboard.menuitem.component';
import { RouterModule } from '@angular/router';
import { DashboardSidebarComponent } from './components/sidebar/dashboard.sidebar.component';
import { DashboardTopbarComponent } from './components/topbar/dashboard.topbar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DashboardsRoutingModule } from './dashboard-routing.module';
import { ChartModule } from 'primeng/chart';
import { MenuModule } from 'primeng/menu';
import { CommonModule } from '@angular/common';
import { SalesComponent } from './pages/sales/sales.component';
import { TableModule } from 'primeng/table';
import { MultiSelectModule } from 'primeng/multiselect';
import { DropdownModule } from 'primeng/dropdown';
import { SliderModule } from 'primeng/slider';
import { ProgressBarModule } from 'primeng/progressbar';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { UsersComponent } from './pages/users/users.component';
import { ConfigComponent } from './pages/config/config.component';
import { InputNumberModule } from 'primeng/inputnumber';


@NgModule({
  declarations: [
    DashboardMenuitemComponent,
    DashboardTopbarComponent,
    DashboardMenuComponent,
    DashboardSidebarComponent,
    DashboardLayoutComponent,
    DashboardComponent,
    SalesComponent,
    UsersComponent,
    ConfigComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    DashboardsRoutingModule,
    ChartModule,
    MenuModule,
    TableModule,
    MultiSelectModule,
    DropdownModule,
    SliderModule,
    ProgressBarModule,
    FormsModule,
    InputTextModule,
    ButtonModule,
    InputNumberModule
  ],
  exports: [DashboardLayoutComponent]
})
export class DashboardModule { }
