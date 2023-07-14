import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { GamesService } from '../../services/games.service';

@Component({
  selector: 'dashboard-top-menu',
  templateUrl: './dashboard.top-menu.component.html',
  styleUrls: ['./dashboard.top-menu.component.scss']
})
export class DashboardTopMenuComponent implements OnInit {
  items: MenuItem[] = [];
  games: MenuItem[] = [];

  constructor(private gamesService: GamesService) {
    this.getGames();
  }

  ngOnInit(): void {
    this.items =[
      /* { label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/dashboard/1'] }, */
      { label: 'Ventas', icon: 'pi pi-fw pi-money-bill', routerLink: ['/sales'] },
      { label: 'Vendedores', icon: 'pi pi-fw pi-users', routerLink: ['/sellers'] },
      { label: 'Configuración', icon: 'pi pi-fw pi-cog', routerLink: ['/config/1'] },
      { 
        label: 'Juegos',
        icon: 'pi pi-fw pi-palette',
        items: this.games
      }
    ]
  }

  getGames() {
    this.gamesService.getGames().subscribe((res: any) => {
      res.data.forEach((element: any) => {
        this.games.push({
          label: element.titulo,
          icon: 'pi pi-fw pi-play',
          routerLink: [`/game/${ element.id }`]
        })
      });
    })
  }
}
