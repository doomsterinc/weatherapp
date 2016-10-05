var request = require('request');

module.exports = function (callback) {
  var currentWeather;
  request({
    url: url,
    json: true
  }, function(error, response, body){
    if (error) {
      console.log('Unable to fetch weather');
    } else {
      // console.log(JSON.stringify(body, null, 4));
      var data = body;
       currentWeather = "It's " + data.main.temp + " in " + data.name + "!";
    }
  });
  callback(currentWeather);
};
