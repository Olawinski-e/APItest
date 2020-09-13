import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';

const routes: Routes = [
	{
		path: '',
		component: HomeComponent,
	},
	{
		path: 'tools',
		loadChildren: () =>
			import('./tools/tools.module').then((m) => m.ToolsModule),
	},
	{
		path: 'post',
		loadChildren: () =>
			import('./posts/posts.module').then((m) => m.ShowPostsModule),
	},
	{
		path: 'notes',
		loadChildren: () =>
			import('./notes/notes.module').then((m) => m.NotesModule),
	},
	{
		path: '',
		redirectTo: 'HomeComponent',
		pathMatch: 'full',
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
