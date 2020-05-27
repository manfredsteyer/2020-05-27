import { AppPage } from './app.po';
import { browser, by, element } from 'protractor';

describe('starter App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    const link = element(by.linkText('Buchen'));
    link.click();


    // po.setCriteria('Graz', 'Hamburg')
    // po.search()

    // const von = element(by.name('von'));
    // const nach = element(by.name('nach'));
    // const suchen = element(by.css('button'));

    // von.clear(); 
    // nach.clear();
    // von.sendKeys('Graz');
    // nach.sendKeys('Hamburg');
    // suchen.click();

    const fluege = element.all(by.tagName('flight-card'));

    expect(fluege.count()).toBe(4);

      });
});
