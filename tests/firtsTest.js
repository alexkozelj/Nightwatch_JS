module.exports = {
   'My first test case': function (browser) {
      browser
      .url('https://alexkozelj.github.io/AirPollutionApp/')
      .waitForElementVisible('#w-aqi')
      .assert.containsText("#w-aqi", "US AirQualityIndex");
   }
}