import { Component, ElementRef } from '@angular/core';
import { DashboardService } from '../../service/dashboard.service';

@Component({
  selector: 'dashboard-sidebar',
  templateUrl: './dashboard.sidebar.component.html',
	styleUrls: ['./dashboard.sidebar.component.scss']
})
export class DashboardSidebarComponent {
  constructor(public layoutService: DashboardService, public el: ElementRef) { }
}

