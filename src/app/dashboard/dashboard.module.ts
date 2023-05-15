import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ButtonModule } from 'primeng/button';
import { ChartModule } from 'primeng/chart';
import { ConfigComponent } from './pages/config/config.component';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { MenuModule } from 'primeng/menu';
import { MultiSelectModule } from 'primeng/multiselect';
import { ProgressBarModule } from 'primeng/progressbar';
import { SliderModule } from 'primeng/slider';
import { TableModule } from 'primeng/table';
import { MenubarModule } from 'primeng/menubar';

import { DashboardsRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DashboardLayoutComponent } from './layout/dashboard.layout.component';
import { DashboardMenuComponent } from './components/menu/dashboard.menu.component';
import { DashboardSidebarComponent } from './components/sidebar/dashboard.sidebar.component';
import { DashboardTopbarComponent } from './components/topbar/dashboard.topbar.component';
import { DashboardMenuItemComponent } from './components/menu-item/dashboard.menu-item.component';
import { SalesComponent } from './pages/sales/sales.component';
import { UsersComponent } from './pages/users/users.component';
import { DashboardTopMenuComponent } from './components/top-menu/dashboard.top-menu.component';

@NgModule({
  declarations: [
    DashboardTopbarComponent,
    DashboardMenuComponent,
    DashboardMenuItemComponent,
    DashboardSidebarComponent,
    DashboardLayoutComponent,
    DashboardComponent,
    SalesComponent,
    UsersComponent,
    ConfigComponent,
    DashboardTopMenuComponent,
  ],
  imports: [
    ButtonModule,
    ChartModule,
    CommonModule,
    DashboardsRoutingModule,
    DropdownModule,
    FormsModule,
    InputNumberModule,
    InputTextModule,
    MenuModule,
    MultiSelectModule,
    ProgressBarModule,
    RouterModule,
    SliderModule,
    TableModule,
    MenubarModule
  ],
  exports: [DashboardLayoutComponent]
})
export class DashboardModule { }
