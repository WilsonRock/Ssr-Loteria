import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'dashboard-sidebar',
  templateUrl: './dashboard.sidebar.component.html',
	styleUrls: ['./dashboard.sidebar.component.scss']
})
export class DashboardSidebarComponent {
  constructor(public el: ElementRef) { }
}

