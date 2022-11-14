import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

	constructor() { }

	ngOnInit(): void {
	}

	slogan: string="Your one stop shop for everything.";
	source: string="/assets/shopping.jpg";

	// getSlogan() {
	// 	return 'Your one stop shop for everything.'
	// }
}
