import { browser, element, by } from 'protractor';

export class App {
	public open() {
		return browser.get(browser.baseUrl);
	}
}
