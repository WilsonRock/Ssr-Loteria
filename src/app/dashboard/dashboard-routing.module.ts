import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SalesComponent } from './pages/sales/sales.component';
import { UsersComponent } from './pages/users/users.component';
import { ConfigComponent } from './pages/config/config.component';
import { GamesComponent } from './pages/games/games.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'sales',
    component: SalesComponent
  },
  {
    path: 'users',
    component: UsersComponent
  },
  {
    path: 'config',
    component: ConfigComponent
  },
  {
    path: 'game',
    component: GamesComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardsRoutingModule { }
