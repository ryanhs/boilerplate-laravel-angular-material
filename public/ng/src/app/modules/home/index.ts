import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// common
import { SharedComponentsModule } from './../../shared-components/';

// components
import { PageComponent } from './page/page.component';

@NgModule({
	imports: [
		CommonModule,
		SharedComponentsModule,
		RouterModule.forChild([
			{
				path: '',
				component: PageComponent,
				children: [

				]
			}
		] as Routes)
	],
	declarations: [
		PageComponent
	],
})
export class HomeModule { }
