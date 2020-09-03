import { Component, OnInit } from '@angular/core';

import { JsontestpostsService } from 'src/app/services/jsontest-post/jsontestposts.service';
import { Post } from 'src/app/services/jsontest.type';

@Component({
	selector: 'app-show-posts',
	templateUrl: './show-posts.component.html',
	styleUrls: ['./show-posts.component.scss'],
})
export class ShowPostsComponent implements OnInit {
	public posts: Post[];

	constructor(private _jsontest: JsontestpostsService) {}

	public ngOnInit() {
		this.getPosts();
	}

	public getPosts() {
		this._jsontest.getPosts().subscribe((data) => {
			this.posts = data;
		});
	}
}
