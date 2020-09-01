import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ENVIRONMENT } from '../../../environments/environment';
import { GetIp, GetDate, Post } from './jsontest.type';

@Injectable({
	providedIn: 'root',
})
export class JsontestService {
	constructor(private _http: HttpClient) {}

	public getIp() {
		return this._http.get<GetIp>(
			ENVIRONMENT.services.jsontest.apiUrls.ip + '/'
		);
	}

	public getDate() {
		return this._http.get<GetDate>(
			ENVIRONMENT.services.jsontest.apiUrls.date + '/'
		);
	}

	public getPosts() {
		return this._http.get<Post[]>(
			ENVIRONMENT.services.jsontest.apiUrls.posts + '/'
		);
	}

	public postPost(post: Post) {
		return this._http.post<Post>(
			ENVIRONMENT.services.jsontest.apiUrls.posts + '/',
			post
		);
	}
}
