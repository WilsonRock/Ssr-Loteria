import { Component, ElementRef, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { DashboardService } from '../../service/dashboard.service';

@Component({
  selector: 'dashboard-topbar',
  templateUrl: './dashboard.topbar.component.html',
	styleUrls: ['./dashboard.topbar.component.scss']
})
export class DashboardTopbarComponent {

  items!: MenuItem[];

  @ViewChild('menubutton') menuButton!: ElementRef;

  @ViewChild('topbarmenubutton') topbarMenuButton!: ElementRef;

  @ViewChild('topbarmenu') menu!: ElementRef;

  constructor(public layoutService: DashboardService) { }
}
