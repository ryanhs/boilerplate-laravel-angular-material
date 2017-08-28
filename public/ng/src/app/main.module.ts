import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Component, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// material.angular.io
import { MdNativeDateModule } from '@angular/material';
import { MaterialAngularIOModule } from './glues/material.angular.io/';
import 'hammerjs';

// route here
import {MAIN_ROUTES} from './main.routing';


@Component({
	selector: 'app-root',
	template: `<router-outlet></router-outlet>`
})
export class MainComponent {}

@NgModule({
	declarations: [
		MainComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		FormsModule,
		HttpModule,
		MdNativeDateModule,
		ReactiveFormsModule,
		MaterialAngularIOModule,
		RouterModule.forRoot(MAIN_ROUTES)
	],
	providers: [],
	bootstrap: [
		MainComponent
	]
})
export class MainModule { }
