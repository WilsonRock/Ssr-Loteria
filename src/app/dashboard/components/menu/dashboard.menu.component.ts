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
				label: 'Comercios',
				items: [
					{
						label: 'Gisoft',
						icon: 'pi pi-fw pi-building',
						routerLink: ['/notfound'],
						items: [
							{
								label: 'Comercio 1',
								icon: 'pi pi-fw pi-briefcase',
								items: [
									{
										label: 'Comercio 1.1',
										icon: 'pi pi-fw pi-briefcase'
									}
								]
							},{
								label: 'Comercio 2',
								icon: 'pi pi-fw pi-briefcase',
								items: [
									{
										label: 'Comercio 2.1',
										icon: 'pi pi-fw pi-briefcase',
										items: [
											{
												label: 'Comercio 2.1.1',
												icon: 'pi pi-fw pi-briefcase'
											}
										]
									},
								]
							}
						]
					}
				]
			},

			{
				label: 'Juegos',
				items: [
					{
						label: 'Chance',
						icon: 'pi pi-fw pi-play',
					}
				]
			}
		];
	}
}
