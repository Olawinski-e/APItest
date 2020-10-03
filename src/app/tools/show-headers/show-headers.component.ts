import { delay } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { JsontestService } from 'src/app/services/jsontest/jsontest.service';

@Component({
	selector: 'app-show-headers',
	templateUrl: './show-headers.component.html',
	styleUrls: ['./show-headers.component.scss'],
})
export class ShowHeadersComponent implements OnInit {
	public loader = false;
	public AcceptLanguage: string;
	public Host: string;
	public AcceptCharset: string;
	public Accept: string;
	public UserAgent: string;

	constructor(private _jsontest: JsontestService) {}

	ngOnInit(): void {
		this.getHeaders();
	}

	public getHeaders() {
		this.loader = true;
		this._jsontest
			.getHeaders()
			.pipe(delay(500))
			.subscribe((data) => {
				this.loader = false;
				this.AcceptLanguage = data['Accept-Language'];
				this.Host = data.Host;
				this.AcceptCharset = data['Accept-Charset'];
				this.Accept = data.Accept;
				this.UserAgent = data['User-Agent'];
			});
	}
}
