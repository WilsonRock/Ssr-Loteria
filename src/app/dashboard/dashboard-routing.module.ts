import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SalesComponent } from './pages/sales/sales.component';
import { UsersComponent } from './pages/users/users.component';
import { ConfigComponent } from './pages/config/config.component';
import { GamesComponent } from './pages/games/games.component';
import { AssignTicketComponent } from './pages/assign-ticket/assign-ticket.component';
import { RafflesComponent } from './pages/raffles/raffles.component';

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
    path: 'game/:id/config',
    component: GamesComponent
  },
  {
    path: 'game/:id/assign-ticket',
    component: AssignTicketComponent
  },
  {
    path: 'game/:id/raffles',
    component: RafflesComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardsRoutingModule { }
