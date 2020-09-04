import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GetHeader } from '../jsontest.type';
import { ENVIRONMENT } from 'src/environments/environment';

@Injectable({
	providedIn: 'root',
})
export class JsontestHeadersService {
	constructor(private _http: HttpClient) {}

	public getHeaders() {
		return this._http.get<GetHeader>(
			ENVIRONMENT.services.jsontestheaders.apiUrl + '/'
		);
	}
}
