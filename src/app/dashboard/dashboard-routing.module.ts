import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SalesComponent } from './pages/sales/sales.component';
import { UsersComponent } from './pages/users/users.component';
import { ConfigComponent } from './pages/config/config.component';
import { GamesComponent } from './pages/games/games.component';

const routes: Routes = [
  {
    path: 'dashboard/:commerce',
    component: DashboardComponent
  },
  {
    path: 'sales',
    component: SalesComponent
  },
  {
    path: 'sellers',
    component: UsersComponent
  },
  {
    path: 'config/:commerce',
    component: ConfigComponent
  },
  {
    path: 'game/:id',
    component: GamesComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardsRoutingModule { }
