import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ShowPostsComponent } from './show-posts/show-posts.component';
import { ShowPostsRoutingModule } from './posts-routing.module';

import {
	MatFormFieldModule,
	MAT_FORM_FIELD_DEFAULT_OPTIONS,
} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
	imports: [
		CommonModule,
		ShowPostsRoutingModule,
		FormsModule,
		ReactiveFormsModule,

		MatFormFieldModule,
		MatInputModule,
		MatCardModule,
		MatIconModule,
		MatButtonModule,
	],
	declarations: [ShowPostsComponent],
	providers: [
		{
			provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
			useValue: { floatLabel: 'auto' },
		},
	],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ShowPostsModule {}
