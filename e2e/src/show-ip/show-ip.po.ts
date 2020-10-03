import { by, element } from 'protractor';

export class ShowIpPage {
	public ip: any = {};
	public regex = /^(?:[0-9]{1,3}\.)(?:[0-9]{1,3}\.)(?:[0-9]{1,3}\.)(?:[0-9]{1,3})$/;

	public getIp() {
		return element(by.css('app-root app-show-ip div .ip')).getText();
	}
}
