import { delay } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';

import { JsontestdateTimeService } from 'src/app/services/jsontest-dateTime/jsontestdate-time.service';

@Component({
	selector: 'app-show-datetime',
	templateUrl: './show-datetime.component.html',
	styleUrls: ['./show-datetime.component.scss'],
})
export class ShowDatetimeComponent implements OnInit {
	public loader = false;
	public timestamp: number;
	public currentDate = new Date(this.timestamp);
	public deadline = this.currentDate;

	constructor(private _jsontest: JsontestdateTimeService) {}

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
				this.timestamp = data.milliseconds_since_epoch;
			});
	}

	// ===============================================================
}
