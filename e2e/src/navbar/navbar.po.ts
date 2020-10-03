import { element, by } from 'protractor';

export class Navbar {
	public menuTo(index: number) {
		element(by.css('mat-toolbar button')).click();
		element(
			by.css(
				'.cdk-overlay-container div[id="cdk-overlay-0"] div[role="menu"] button:nth-child(' +
					index +
					')'
			)
		).click();
	}

	public menuDoubleTo(index: number) {
		element(by.css('mat-toolbar button')).click();
		element(
			by.css(
				'.cdk-overlay-container div[id="cdk-overlay-0"] div[role="menu"] button:nth-child(' +
					index +
					')'
			)
		).click();
		element(
			by.css(
				'.cdk-overlay-container div[id="cdk-overlay-1"] div[role="menu"] button:nth-child(' +
					index +
					')'
			)
		).click();
	}

	public home() {
		element(by.css('mat-toolbar span')).click();
	}
}
