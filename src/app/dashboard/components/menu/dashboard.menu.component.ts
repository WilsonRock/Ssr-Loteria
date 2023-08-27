import { Component, OnDestroy, OnInit } from '@angular/core';
import { DashboardService } from '../../services/dashboard.service';

@Component({
	selector: 'dashboard-menu',
	templateUrl: './dashboard.menu.component.html',
	styleUrls: ['./dashboard.menu.component.scss']
})
export class DashboardMenuComponent implements OnInit, OnDestroy {

	model: any[] = [];
	commerces: any[] = [];
	destroy: any;

	constructor(private dashboardService: DashboardService) {
		this.destroy = this.dashboardService.updateCommerces$.subscribe(data => {
      if (data) {
				this.commerces = []
        this.getCommerces();
      }
    });
		this.getCommerces()
	}

	ngOnInit() {
		this.model = [
			{
				label: 'Sucursales',
				items: /* this.commerces	 */ [
					{
						label: 'Guatemala',
						icon: 'pi pi-fw pi-building',
						items: [
							{
								label: 'Escuintla',
								icon: 'pi pi-fw pi-briefcase'
							},
							{
								label: 'Chiquimulilla',
								icon: 'pi pi-fw pi-briefcase'
							}
						]
					},
					{
						label: 'El Salvador',
						icon: 'pi pi-fw pi-building',
						items: [
							{
								label: 'Quezaltepeque',
								icon: 'pi pi-fw pi-briefcase'
							},
							{
								label: 'Armenia',
								icon: 'pi pi-fw pi-briefcase'
							}
						]
					}
				]
			}
		];
	}

	ngOnDestroy() {
    this.destroy.unsubscribe();
  }

	getCommerces() {
		this.dashboardService.getCommerces().subscribe((res: any) => {
			res.data.forEach((element: any) => {
				this.commerces.push({
					label: element.nombre,
					icon: 'pi pi-fw pi-building',
					routerLink: [`dashboard/${ element.id }`],
					
				})
			});
		})
	}
}
