import { delay } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import * as moment from 'moment-timezone';

@Component({
	selector: 'app-show-datetime',
	templateUrl: './show-datetime.component.html',
	styleUrls: ['./show-datetime.component.scss'],
})
export class ShowDatetimeComponent implements OnInit {
	public loader = false;
	public timestamp: number;
	public france: string;
	public korea: string;

	constructor() {}

	public ngOnInit() {
		setInterval(() => {
			const dateI = new Date();
			this.updateFDate(dateI);
			this.updateKDate(dateI);
		}, 1000);
	}

	// FRANCE ===============================================================

	public fDate: string;

	private updateFDate(date: Date) {
		this.france = moment(this.timestamp)
			.locale('fr')
			.tz('Europe/Paris')
			.format('[et nous sommes le] D MMMM YYYY');
		this.fDate = date.toLocaleTimeString('fr-FR', {
			timeZone: 'Europe/Paris',
			hour12: false,
		});
	}

	// KOREA ===============================================================

	public kDate: string;

	private updateKDate(date: Date) {
		this.korea = moment(this.timestamp)
			.tz('Asia/Seoul')
			.format('[and today is] MMMM Do YYYY');
		this.kDate = date.toLocaleTimeString('en-US', {
			timeZone: 'Asia/Seoul',
		});
	}
}
