import { Component, OnInit } from '@angular/core';

import { MaticonregistryService } from './../services/maticonregistry/maticonregistry.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
	constructor(private matIconRegistry: MaticonregistryService) {
		this.matIconRegistry.init();
	}

	ngOnInit(): void {}
}
