import { browser, element, by } from 'protractor';

export class App {
  public open() {
    return browser.get(browser.baseUrl);
  }

  public menuTo(index:number) {
    element(by.css('app-root mat-toolbar button')).click();
    element(by.css('.cdk-overlay-container div[role="menu"] button:nth-child('+index+')')).click();
  }
}
