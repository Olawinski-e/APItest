import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ENVIRONMENT } from '../../../environments/environment';

import { GetDate } from '../jsontest.type';

@Injectable({
	providedIn: 'root',
})
export class JsontestdateTimeService {
	constructor(private _http: HttpClient) {}

	public getDate() {
		return this._http.get<GetDate>(
			ENVIRONMENT.services.jsontestdatetime.apiUrl + '/'
		);
	}
}
