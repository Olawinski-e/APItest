import { delay } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import * as moment from 'moment-timezone';

import { JsontestdateTimeService } from 'src/app/services/jsontest-dateTime/jsontestdate-time.service';

@Component({
	selector: 'app-show-datetime',
	templateUrl: './show-datetime.component.html',
	styleUrls: ['./show-datetime.component.scss'],
})
export class ShowDatetimeComponent implements OnInit {
	public loader = false;

	//  DATE ===============================================================
	public timestamp: number;
	public currentDate = new Date(this.timestamp);

	constructor(private _jsontest: JsontestdateTimeService) {}

	public ngOnInit() {
		this.getDate();

		setInterval(() => {
			const date = new Date();
			this.updateDate(date);
		}, 1000);
	}

	public getDate() {
		this.loader = true;
		this._jsontest
			.getDate()
			.pipe(delay(500))
			.subscribe((data) => {
				this.loader = false;
				this.timestamp = data.milliseconds_since_epoch;
			});
	}

	// CLOCK ===============================================================

	private date = new Date();
	public hour: any;
	public minute: string;
	public second: string;
	public ampm: string;

	private updateDate(date: Date) {
		const hours = this.date.getHours();
		console.log('now' + this.tzone);

		this.ampm = hours >= 12 ? 'PM' : 'AM'; // get the hours from the date
		this.hour = hours % 12; // makes the hour in 12 hours format
		this.hour = this.hour ? this.hour : 12; // if the hour is 0 then 12 is assigned
		this.hour = this.hour < 10 ? '0' + this.hour : this.hour; // if the hour is single digit, then adds 0 in front of

		const minutes = date.getMinutes();
		this.minute = minutes < 10 ? '0' + minutes : minutes.toString();

		const seconds = date.getSeconds();
		this.second = seconds < 10 ? '0' + seconds : seconds.toString();
	}

	// MOMENT ===============================================================

	public now = moment().format();
	public seoul = moment().utcOffset('-08:00');
	public tzone = this.seoul.tz('Asia/Seoul').format('ha z');

	// 	public jun = moment("2014-06-01T12:00:00Z");
	// 	public dec = moment("2014-12-01T12:00:00Z");
	// 	public newYork = moment.tz("2014-06-01 12:00", "America/New_York");
	// 	newYork.format();    // 2014-06-01T12:00:00-04:00

	// jun.tz('Asia/Tokyo').format('ha z');           // 9pm JST
	// dec.tz('Asia/Tokyo').format('ha z');           // 9pm JST
}
