import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { NotfoundComponent } from './notfound/notfound.component';
import { DashboardLayoutComponent } from './dashboard/layout/dashboard.layout.component';
import { AuthGuard } from './auth/guards/auth.guard';
import { PublicGuard } from './auth/guards/public.guard';
import { LandingpageComponent } from './Landingpage/Landingpage.component';

const routes: Routes = [
	{
		path: '',
		canActivate: [AuthGuard],
		/* canMatch: [AuthGuard], */
		component: DashboardLayoutComponent,
		loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
	},
	{
		path: 'auth',
		canActivate: [PublicGuard],
		loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
	},
	{
		path: 'qr/:id',
		component: LandingpageComponent
	  },
	{
		path: 'notfound',
		component: NotfoundComponent
	},
	{
		path: '**',
		redirectTo: '/notfound'
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
    onSameUrlNavigation: 'reload',
    initialNavigation: 'enabledBlocking'
})
	],
	exports: [RouterModule]
})
export class AppRoutingModule {
}
