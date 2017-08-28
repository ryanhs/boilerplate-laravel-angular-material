import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// components
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
	imports: [
        RouterModule
    ],
	exports: [
        NavbarComponent
    ],
	declarations: [
		NavbarComponent
	],
})
export class SharedComponentsModule { }
