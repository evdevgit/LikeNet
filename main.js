var webdriver = require('selenium-webdriver'),
    By = require('selenium-webdriver').By,
    until = require('selenium-webdriver').until;
var proxy = require('selenium-webdriver/proxy');

var searchTerms = [
  {q: 'Hello', domain: '.co.uk'},
  {q: 'Jim', domain: '.com'},
  {q: 'Cool', domain: '.co.uk'}
];

for (var i = 0; i < searchTerms.length; i++) {
  var driver = new webdriver.Builder()
      .forBrowser('firefox')
      .setProxy(proxy.manual({http: '117.240.187.35:3128'}))
      .build();
  driver.get('http://www.google'+searchTerms[i].domain);
  driver.findElement(By.name('q')).sendKeys(searchTerms[i].q);
  driver.findElement(By.name('btnG')).click();
  driver.wait(until.titleIs(searchTerms[i].q+' - Google Search'), 1000);
  driver.quit();
}
