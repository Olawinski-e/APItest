import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { ENVIRONMENT } from '../../../environments/environment';

import { Post } from './jsonplaceholder.type';

@Injectable({
	providedIn: 'root',
})
export class JsonplaceholderService {
	constructor(private _http: HttpClient) {}

	public postPost(post: Post) {
		return this._http.post<Post>(
			ENVIRONMENT.services.jsonplaceholder.apiUrl.post + '/',
			post
		);
	}

	public getPosts() {
		return this._http.get<Post[]>(
			ENVIRONMENT.services.jsonplaceholder.apiUrl.post + '/'
		);
	}
}
