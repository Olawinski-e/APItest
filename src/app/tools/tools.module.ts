import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolsRoutingModule } from './tools-routing.module';
import { ShowIpComponent } from './../tools/show-ip/show-ip.component';
import { ShowDatetimeComponent } from './../tools/show-datetime/show-datetime.component';

@NgModule({
	imports: [CommonModule, ToolsRoutingModule],
	declarations: [ShowIpComponent, ShowDatetimeComponent],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ToolsModule {}
