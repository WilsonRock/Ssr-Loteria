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
				label: 'Comercios',
				items: this.commerces	 /* [
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
				] */
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
					label: element.nombre_contacto,
					icon: 'pi pi-fw pi-building',
					routerLink: [`dashboard/${ element.id }`],
					
				})
			});
		})
	}
}
