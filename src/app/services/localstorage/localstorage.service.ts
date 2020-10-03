import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root',
})
export class LocalstorageService {
	private basicAppSecret = localStorage.setItem('basicAppSecret', 'Kyuri');
	public secret: {};

	constructor() {}

	getSecret() {
		this.secret = localStorage.getItem('basicAppSecret');
	}
}
