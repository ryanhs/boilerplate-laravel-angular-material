import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Component, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

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
		RouterModule.forRoot(MAIN_ROUTES)
	],
	providers: [],
	bootstrap: [
		MainComponent
	]
})
export class MainModule { }
