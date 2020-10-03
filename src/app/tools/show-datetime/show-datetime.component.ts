import { Component, OnInit } from '@angular/core';
import { JsontestService } from 'src/app/services/jsontest/jsontest.service';

import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
registerLocaleData(localeFr, 'fr');

import * as moment from 'moment-timezone';
@Component({
	selector: 'app-show-datetime',
	templateUrl: './show-datetime.component.html',
	styleUrls: ['./show-datetime.component.scss'],
})
export class ShowDatetimeComponent implements OnInit {
	public milliseconds: number = 0;
	public seoul: string;

	constructor(private _jsontest: JsontestService) {}

	public ngOnInit() {
		this.getDatetime();
		setInterval(() => {
			this.getDatetimeSeoul();
		}, 1000);
	}

	// GET DATETIME FROM API ========================================================

	public getDatetime() {
		this._jsontest.getDatetime().subscribe((data) => {
			this.milliseconds = data.milliseconds_since_epoch;
		});
	}

	// GET SYDNEY MOMENT TZ =========================================================

	private getDatetimeSeoul() {
		this.seoul = moment
			.tz(this.milliseconds, 'Asia/Seoul')
			.locale('fr')
			.format('[Il est] HH[h]mm [et nous sommes le] D MMMM YYYY');
	}
}
