const assert = require('assert');

describe('Smoke tests', () => {

  it('can log in', () => {
    browser.withUser('licensing');
    const title = browser.getTitle();
    assert.equal(title, 'Research and testing with animals');
  });

  it('sees the establishments page in the h1', () => {
    browser.withUser('licensing');
    browser.url('/establishments');
    const title = browser.getText('h1');
    assert.equal(title, 'Establishments');
  });

  it('can visit establishment page', () => {
    browser.withUser('licensing');
    browser.url('/establishments');
    browser.click('a[href*="/establishment/8201"]');
    const title = browser.getText('h1');
    assert.equal(title, 'University of Croydon');
  });

  it('can access schedule of premises page', () => {
    browser.withUser('licensing');
    browser.url('/establishments');
    browser.click('a[href*="/establishment/8201"]');
    browser.click('a[href*="/places"]');
    const title = browser.getText('h1');
    assert.equal(title, 'Licensed premises');
  });

  it('can access named people page', () => {
    browser.withUser('licensing');
    browser.url('/establishments');
    browser.click('a[href*="/establishment/8201"]');
    browser.click('a[href*="/people"]');
    const title = browser.getText('h1');
    assert.equal(title, 'Named people and licence holders');
  });

  it('can access establishment details page', () => {
    browser.withUser('licensing');
    browser.url('/establishments');
    browser.click('a[href*="/establishment/8201"]');
    browser.click('a[href*="/details"]');
    const title = browser.getText('h1');
    assert.equal(title, 'Establishment details');
  });

});
