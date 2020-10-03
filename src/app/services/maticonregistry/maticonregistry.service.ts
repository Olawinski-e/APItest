import { Injectable } from '@angular/core';

import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
	providedIn: 'root',
})
export class MaticonregistryService {
	constructor(
		private matIconRegistry: MatIconRegistry,
		private domSanitizer: DomSanitizer
	) {}

	init() {
		this.matIconRegistry.addSvgIcon(
			'thumb',
			this.domSanitizer.bypassSecurityTrustResourceUrl(
				'../assets/img/thumb.svg'
			)
		);
	}
}
