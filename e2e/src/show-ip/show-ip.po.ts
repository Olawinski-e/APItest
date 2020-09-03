import { by, element } from 'protractor';

export class ShowIpPage {
	public ip = '37.166.125.81';
	public regex = /^(\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))\.(\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))\.(\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))\.(\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))$/;

	public getIp() {
		console.log(element(by.id('ipAdress')));
		return element(by.id('ipAdress'));
	}
}
