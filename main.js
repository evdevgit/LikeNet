var webdriver = require('selenium-webdriver'),
    By = require('selenium-webdriver').By,
    until = require('selenium-webdriver').until;
var proxy = require('selenium-webdriver/proxy');

var searchTerms = [
  {q: 'Hello', domain: '.co.uk'},
  {q: 'Jim', domain: '.com'},
  {q: 'Cool', domain: '.co.uk'}
];

var webBot = function(searchTerm, domain) {
  var driver = new webdriver.Builder()
      .forBrowser('firefox')
      //.setProxy(proxy.manual({http: '117.240.187.35:3128'}))
      .build();
  driver.get('http://www.google'+domain);
  console.log('Loading: google'+domain);
  driver.findElement(By.name('q')).sendKeys(searchTerm);
  driver.findElement(By.name('btnG')).click();
  console.log('Searching for: '+searchTerm);
  driver.wait(until.titleIs(searchTerm+' - Google Search'), 1000);
  driver.quit();
}

for (var i = 0; i < searchTerms.length; i++) {
  webBot(searchTerms[i].q, searchTerms[i].domain);
}
