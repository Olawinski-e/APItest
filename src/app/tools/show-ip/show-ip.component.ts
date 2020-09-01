import { delay } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';

import { JsontestService } from '../../services/jsontest/jsontest.service';

@Component({
	selector: 'app-show-ip',
	templateUrl: './show-ip.component.html',
	styleUrls: ['./show-ip.component.scss'],
})
export class ShowIpComponent implements OnInit {
	public loader = false;
	public ip: string = null;

	constructor(private _jsontest: JsontestService) {}

	public ngOnInit() {
		this.getIp();
	}

	public getIp() {
		return new Promise((resolve) => {
			this.loader = true;
			this._jsontest
				.getIp()
				.pipe(delay(500))
				.subscribe((data) => {
					this.loader = false;
					this.ip = data.ip;
					resolve(data.ip);
				});
		});
	}
}
