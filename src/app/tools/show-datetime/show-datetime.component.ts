import { delay } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';

import { JsontestService } from 'src/app/services/jsontest/jsontest.service';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
registerLocaleData(localeFr, 'fr');

@Component({
	selector: 'app-show-datetime',
	templateUrl: './show-datetime.component.html',
	styleUrls: ['./show-datetime.component.scss'],
})
export class ShowDatetimeComponent implements OnInit {
	public loader = false;
	public date: string = null;
	public time: Date;

	constructor(private _jsontest: JsontestService) {}

	public ngOnInit() {
		this.getDate();
	}

	public getDate() {
		this.loader = true;
		this._jsontest
			.getDate()
			.pipe(delay(500))
			.subscribe((data) => {
				this.loader = false;
				this.date = data.date;
				this.time = new Date(data.date + ' ' + data.time + ' GMT+0000');
			});
	}
}
