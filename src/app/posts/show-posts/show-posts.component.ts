import { Component, OnInit } from '@angular/core';

import { JsonplaceholderService } from 'src/app/services/jsonplaceholder/jsonplaceholder.service';
import { Post } from 'src/app/services/jsontest/jsontest.type';

@Component({
	selector: 'app-show-posts',
	templateUrl: './show-posts.component.html',
	styleUrls: ['./show-posts.component.scss'],
})
export class ShowPostsComponent implements OnInit {
	public posts: Post[];

	constructor(private _jsonplaceholder: JsonplaceholderService) {}

	public ngOnInit() {
		this.getPosts();
	}

	public getPosts() {
		this._jsonplaceholder.getPosts().subscribe((data) => {
			this.posts = data;
		});
	}
}
