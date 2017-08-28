import { RouterModule, Routes } from '@angular/router';

export const MAIN_ROUTES: Routes = [
	{
		path: 'home',
		loadChildren: './modules/home/index#HomeModule',
		// data: { preload: true }
	},
	{
		path: 'about',
		loadChildren: './modules/about/index#AboutModule',
		// data: { preload: true }
	},
	{ path: '', redirectTo: '/home', pathMatch: 'full' }
	// { path: '**', component: PageNotFoundComponent }
];
