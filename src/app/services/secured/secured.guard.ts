import { Injectable } from '@angular/core';
import {
	CanActivate,
	ActivatedRouteSnapshot,
	RouterStateSnapshot,
	UrlTree,
	Router,
} from '@angular/router';
import { Observable } from 'rxjs';

import { LocalstorageService } from './../localstorage/localstorage.service';

@Injectable({
	providedIn: 'root',
})
export class SecuredGuard implements CanActivate {
	private value: string = '';
	private secret: any = '';

	constructor(public router: Router, localstorage: LocalstorageService) {
		this.secret = localstorage.getSecret();
		this.secret = localStorage['basicAppSecret'];
	}

	canActivate(
		next: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	):
		| Observable<boolean | UrlTree>
		| Promise<boolean | UrlTree>
		| boolean
		| UrlTree {
		this.value = prompt('Entrez le password', '');
		if (this.value !== this.secret) {
			window.alert('Mauvais password, accès refusé!');
			this.router.navigate(['/']);
		}
		return true;
	}
}
