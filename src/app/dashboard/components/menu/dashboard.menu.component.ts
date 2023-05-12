import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { DashboardService } from '../../service/dashboard.service';

@Component({
	selector: 'dashboard-menu',
	templateUrl: './dashboard.menu.component.html',
	styleUrls: ['./dashboard.menu.component.scss']
})
export class DashboardMenuComponent implements OnInit {

	model: any[] = [];

	constructor(public layoutService: DashboardService) { }

	ngOnInit() {
		this.model = [
			{
				label: 'Home',
				items: [
					{ label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/'] },
					{ label: 'Ventas', icon: 'pi pi-fw pi-money-bill', routerLink: ['/sales'] },
					{ label: 'Usuarios', icon: 'pi pi-fw pi-users', routerLink: ['/users'] },
					{ label: 'Configuración', icon: 'pi pi-fw pi-cog', routerLink: ['/config'] }

				]
			},
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
