import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'dashboard-top-menu',
  templateUrl: './dashboard.top-menu.component.html',
  styleUrls: ['./dashboard.top-menu.component.scss']
})
export class DashboardTopMenuComponent implements OnInit {
  items: MenuItem[] = [];

  ngOnInit(): void {
      this.items =[
        { label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/dashboard'] },
        { label: 'Ventas', icon: 'pi pi-fw pi-money-bill', routerLink: ['/sales'] },
        { label: 'Usuarios', icon: 'pi pi-fw pi-users', routerLink: ['/users'] },
        { label: 'Configuración', icon: 'pi pi-fw pi-cog', routerLink: ['/config'] },
        { 
          label: 'Juegos',
          icon: 'pi pi-fw pi-palette',
          items: [
            { label: 'Chance', icon: 'pi pi-fw pi-play', routerLink: ['/game'] } 
          ]
        }
      ]
  }

}
