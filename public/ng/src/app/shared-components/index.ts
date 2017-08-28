import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// material.angular.io
import { MdNativeDateModule } from '@angular/material';
import { MaterialAngularIOModule } from './../glues/material.angular.io/';
import 'hammerjs';

// components
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
	imports: [
        RouterModule,
		MaterialAngularIOModule
    ],
	exports: [
        NavbarComponent
    ],
	declarations: [
		NavbarComponent
	],
})
export class SharedComponentsModule { }
