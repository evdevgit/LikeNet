var webdriver = require('selenium-webdriver'),
    By = require('selenium-webdriver').By,
    until = require('selenium-webdriver').until;

var searchTerms = [
  {q: 'Hello', domain: '.co.uk'},
  {q: 'Jim', domain: '.se'},
  {q: 'Cool', domain: '.se'}
];

for (var i = 0; i < searchTerms.length; i++) {
  var driver = new webdriver.Builder()
      .forBrowser('firefox')
      .build();
  driver.get('http://www.google'+searchTerms[i].domain);
  driver.findElement(By.name('q')).sendKeys(searchTerms[i].q);
  driver.findElement(By.name('btnG')).click();
  driver.wait(until.titleIs(searchTerms[i].q+' - Google Search'), 1000);
  driver.quit();
}
