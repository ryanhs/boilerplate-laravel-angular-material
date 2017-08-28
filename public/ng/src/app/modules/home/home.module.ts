import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// material.angular.io
import { MdNativeDateModule } from '@angular/material';
import { MaterialAngularIOModule } from './../../glues/material.angular.io/';
import 'hammerjs';

// common
import { SharedComponentsModule } from './../../shared-components/';

// components
import { PageComponent } from './page/page.component';

@NgModule({
	imports: [
		CommonModule,
		MaterialAngularIOModule,
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
