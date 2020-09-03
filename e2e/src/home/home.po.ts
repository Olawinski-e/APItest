import { by, element } from 'protractor';

export class HomePage {
	public getTitle() {
		return element(by.css('app-root app-home .main h3')).getText();
	}
}
