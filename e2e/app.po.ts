import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }

  setCriteria(from, to) {
    const von = element(by.name('von'));
    const nach = element(by.name('nach'));

    von.sendKeys(from);
    to.sendKeys(to);

  }

  search() {
    const suchen = element(by.css('button'));
    suchen.click();
  }

}
