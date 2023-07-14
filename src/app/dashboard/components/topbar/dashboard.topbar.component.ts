import { Component, ElementRef, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { DashboardService } from '../../services/dashboard.service';
import { AuthService } from 'src/app/auth/services/auth.service';
import { Router } from '@angular/router';

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

  constructor(public layoutService: DashboardService, private authService: AuthService, private router: Router) {
    this.items = [
      /* { label: 'Perfil', icon: 'pi pi-user-edit', routerLink: ['/profile'] },
      { separator: true }, */
      { label: 'Logout', icon: 'pi pi-sign-out', command: () => { this.logout() } }
    ];
  }

  logout() {
    this.authService.logout().subscribe(() => {
      localStorage.clear()
      this.router.navigate(['/auth/login'])
    })
  }
}
