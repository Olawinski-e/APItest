import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShowIpComponent } from './../tools/show-ip/show-ip.component';
import { ShowDatetimeComponent } from './../tools/show-datetime/show-datetime.component';
import { ShowHeadersComponent } from './show-headers/show-headers.component';

const routes: Routes = [
	{
		path: 'show-datetime',
		component: ShowDatetimeComponent,
	},
	{
		path: 'show-ip',
		component: ShowIpComponent,
	},
	{
		path: 'show-headers',
		component: ShowHeadersComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class ToolsRoutingModule {}
