import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { delay } from 'rxjs/operators';

import { JsonplaceholderService } from 'src/app/services/jsonplaceholder/jsonplaceholder.service';

@Component({
	selector: 'app-post-new',
	templateUrl: './post-new.component.html',
	styleUrls: ['./post-new.component.scss'],
})
export class PostNewComponent implements OnInit {
	public loader = false;

	public postCreateForm: FormGroup;
	public submitted: boolean;
	public id: number;

	constructor(private _jsonplaceholder: JsonplaceholderService) {}

	ngOnInit(): void {
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

	public onSubmit() {
		this.loader = true;
		this.submitted = true;

		if (this.postCreateForm.invalid) {
			return;
		}

		this._jsonplaceholder
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
