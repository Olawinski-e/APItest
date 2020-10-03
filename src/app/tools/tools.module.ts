import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolsRoutingModule } from './tools-routing.module';
import { ShowIpComponent } from './../tools/show-ip/show-ip.component';
import { ShowDatetimeComponent } from './../tools/show-datetime/show-datetime.component';
import { ShowHeadersComponent } from './show-headers/show-headers.component';
import { SecuredComponent } from './secured/secured.component';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
registerLocaleData(localeFr, 'fr');

@NgModule({
	imports: [CommonModule, ToolsRoutingModule],
	declarations: [
		ShowIpComponent,
		ShowDatetimeComponent,
		ShowHeadersComponent,
		SecuredComponent,
	],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ToolsModule {}
