import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ButtonModule } from 'primeng/button';
import { ChartModule } from 'primeng/chart';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { MenuModule } from 'primeng/menu';
import { MultiSelectModule } from 'primeng/multiselect';
import { ProgressBarModule } from 'primeng/progressbar';
import { SliderModule } from 'primeng/slider';
import { MenubarModule } from 'primeng/menubar';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

import { SharedModule } from '../shared/shared.module';

import { DashboardsRoutingModule } from './dashboard-routing.module';
import { DashboardLayoutComponent } from './layout/dashboard.layout.component';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DashboardMenuComponent } from './components/menu/dashboard.menu.component';
import { DashboardSidebarComponent } from './components/sidebar/dashboard.sidebar.component';
import { DashboardTopbarComponent } from './components/topbar/dashboard.topbar.component';
import { DashboardMenuItemComponent } from './components/menu-item/dashboard.menu-item.component';
import { DashboardTopMenuComponent } from './components/top-menu/dashboard.top-menu.component';

import { ConfigComponent } from './pages/config/config.component';
import { SalesComponent } from './pages/sales/sales.component';
import { UsersComponent } from './pages/users/users.component';
import { GamesComponent } from './pages/games/games.component';

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
    GamesComponent,
  ],
  imports: [
    SharedModule,
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
    MenubarModule,
    ToastModule
  ],
  exports: [DashboardLayoutComponent],
  providers: [MessageService]
})
export class DashboardModule { }
