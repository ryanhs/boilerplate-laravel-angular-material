import {
	Component, OnInit,
	Input
} from '@angular/core';

@Component({
	selector: 'shared-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
@Input() sidenav: any;

	constructor() { }

	ngOnInit() {
	}

}
