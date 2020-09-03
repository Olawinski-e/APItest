import { browser, logging } from 'protractor';

import { App } from './app.po';
import { HomePage } from './home/home.po';
import { ShowIpPage } from './show-ip/show-ip.po';

describe('workspace-project App', () => {
	let app: App;
	let homePage: HomePage;
	let showIP: ShowIpPage;

	beforeEach(() => {
		app = new App();
		homePage = new HomePage();
		showIP = new ShowIpPage();
	});

	it('should display title in "home" page', () => {
		app.open();
		app.menuTo(1);
		expect(homePage.getTitle()).toEqual('Bienvenue sur BasicApp');
	});

	it('should match IP with regex', async () => {
		await showIP.getIp();

		expect(showIP.ip).toMatch(showIP.regex);
	});

	afterEach(async () => {
		// Assert that there are no errors emitted from the browser
		const logs = await browser.manage().logs().get(logging.Type.BROWSER);
		expect(logs).not.toContain(
			jasmine.objectContaining({
				level: logging.Level.SEVERE,
			} as logging.Entry)
		);
	});
});
