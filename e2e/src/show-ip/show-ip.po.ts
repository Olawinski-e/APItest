import { by, element } from 'protractor';

export class ShowIpPage {
	public ip: any = {};
	public regex = /^(\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))\.(\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))\.(\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))\.(\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))$/;

	public getIp() {
		this.ip = element(by.id('ipAdress'));
		return element(by.id('ipAdress'));
	}
}
