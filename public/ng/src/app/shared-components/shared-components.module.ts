import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// material.angular.io
import { MdNativeDateModule } from '@angular/material';
import { MaterialAngularIOModule } from './../glues/material.angular.io/';
import 'hammerjs';

// components
import { NavbarComponent } from './navbar/navbar.component';
import { SidenavComponent } from './sidenav/sidenav.component';

@NgModule({
	imports: [
		CommonModule,
        RouterModule,
		MaterialAngularIOModule
    ],
	exports: [
        NavbarComponent,
		SidenavComponent
    ],
	declarations: [
		NavbarComponent,
		SidenavComponent
	],
})
export class SharedComponentsModule { }
