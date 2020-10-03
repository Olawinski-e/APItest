import { browser, logging } from 'protractor';

import { App } from './app.po';
import { HomePage } from './home/home.po';
import { Navbar } from './navbar/navbar.po';
import { ShowIpPage } from './show-ip/show-ip.po';

describe('workspace-project App', () => {
	let app: App;
	let navbar: Navbar;
	let homePage: HomePage;
	let showIpPage: ShowIpPage;

	beforeEach(() => {
		app = new App();
		navbar = new Navbar();
		homePage = new HomePage();
		showIpPage = new ShowIpPage();
	});

	it('should display title in "home" page', () => {
		app.open();
		navbar.menuTo(1);
		expect(homePage.getTitle()).toEqual('Bienvenue sur BasicApp');
	});

	it('should match ip with regex in "show-ip" page', () => {
		app.open();
		navbar.menuDoubleTo(1);
		expect(showIpPage.getIp()).toMatch(showIpPage.regex);
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
