import { browser, logging } from 'protractor';

import { App } from './app.po';
import { HomePage } from './home/home.po';

describe('workspace-project App', () => {
  let app:App;
  let homePage:HomePage;

  beforeEach(() => {
    app = new App();
    homePage = new HomePage();
  });

  it('should display title in "home" page', () => {
    app.open();
    app.menuTo(1);
    expect(homePage.getTitle()).toEqual('Bienvenue sur BasicApp');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
