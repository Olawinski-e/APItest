import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ENVIRONMENT } from '../../../environments/environment';
import { GetDatetime, GetIp, GetHeader } from './jsontest.type';

@Injectable({
	providedIn: 'root',
})
export class JsontestService {
	constructor(private _http: HttpClient) {}

	public getIp() {
		return this._http.get<GetIp>(
			ENVIRONMENT.services.jsontest.apiUrl.ip + '/'
		);
	}

	public getDatetime() {
		return this._http.get<GetDatetime>(
			ENVIRONMENT.services.jsontest.apiUrl.datetime + '/'
		);
	}

	public getHeaders() {
		return this._http.get<GetHeader>(
			ENVIRONMENT.services.jsontest.apiUrl.headers + '/'
		);
	}
}
