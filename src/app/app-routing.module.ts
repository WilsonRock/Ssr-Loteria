import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { NotfoundComponent } from './notfound/notfound.component';
import { DashboardLayoutComponent } from './dashboard/layout/dashboard.layout.component';

const routes: Routes = [
	{
		path: '',
		component: DashboardLayoutComponent,
		children: [
			{
				path: '',
				loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
			}
		]
	},
	{
		path: 'auth',
		loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
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
	imports: [RouterModule.forRoot(routes,
		{
			scrollPositionRestoration: 'enabled',
			anchorScrolling: 'enabled',
			onSameUrlNavigation: 'reload'
		})
	],
	exports: [RouterModule]
})
export class AppRoutingModule {
}
