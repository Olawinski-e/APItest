import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ENVIRONMENT } from '../../../environments/environment';

import { Post } from '../jsontest.type';

@Injectable({
	providedIn: 'root',
})
export class JsontestpostsService {
	constructor(private _http: HttpClient) {}

	public getPosts() {
		return this._http.get<Post[]>(
			ENVIRONMENT.services.jsontestposts.apiUrls.posts + '/'
		);
	}

	public postPost(post: Post) {
		return this._http.post<Post>(
			ENVIRONMENT.services.jsontestposts.apiUrls.posts + '/',
			post
		);
	}
}
