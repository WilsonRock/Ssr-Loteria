import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'dashboard-menu',
	templateUrl: './dashboard.menu.component.html',
	styleUrls: ['./dashboard.menu.component.scss']
})
export class DashboardMenuComponent implements OnInit {

	model: any[] = [];

	constructor() { }

	ngOnInit() {
		this.model = [
			{
				label: 'Páginas',
				icon: 'pi pi-fw pi-briefcase',
				items: [
					{
						label: 'Auth',
						icon: 'pi pi-fw pi-user',
						items: [
							{
								label: 'Login',
								icon: 'pi pi-fw pi-sign-in',
								routerLink: ['/auth/login']
							}
						]
					},
					{
						label: 'Not Found',
						icon: 'pi pi-fw pi-exclamation-circle',
						routerLink: ['/notfound']
					},
				]
			}
		];
	}
}
