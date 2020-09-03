import { delay } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';

import { JsontestpostsService } from 'src/app/services/jsontest-post/jsontestposts.service';
import { Post } from 'src/app/services/jsontest.type';

import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
	selector: 'app-show-posts',
	templateUrl: './show-posts.component.html',
	styleUrls: ['./show-posts.component.scss'],
})
export class ShowPostsComponent implements OnInit {
	public loader = false;
	public posts: Post[];

	public postCreateForm: FormGroup;
	public submitted: boolean;
	public id: number;

	constructor(private _jsontest: JsontestpostsService) {}

	public ngOnInit() {
		this.getPosts();

		this.postCreateForm = new FormGroup({
			title: new FormControl('', [
				Validators.required,
				Validators.minLength(3),
				Validators.maxLength(60),
			]),
			body: new FormControl('', [
				Validators.minLength(30),
				Validators.maxLength(600),
			]),
			userId: new FormControl(''),
		});
	}

	public checkError = (controlName: string, errorName: string) => {
		return this.postCreateForm.controls[controlName].hasError(errorName);
	};

	public getPosts() {
		this._jsontest.getPosts().subscribe((data) => {
			this.posts = data;
		});
	}

	public onSubmit() {
		this.loader = true;
		this.submitted = true;

		if (this.postCreateForm.invalid) {
			return;
		}

		this._jsontest
			.postPost({
				title: this.postCreateForm.value.title,
				body: this.postCreateForm.value.body,
				userId: 3,
			})
			.pipe(delay(500))
			.subscribe((res) => {
				this.loader = false;
				this.id = res.id;
			});
	}

	onReset() {
		this.submitted = false;
		this.postCreateForm.reset();
	}
}
