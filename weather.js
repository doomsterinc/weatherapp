var request = require('request');
var url = 'http://api.openweathermap.org/data/2.5/weather?appid=9e68a0b2ebf54fac8c4ac127281e612f&q=PortoAlegre&units=metric';

module.exports = function (callback) {
  request({
    url: url,
    json: true
  }, function(error, response, body){
    var errmsg, currentWeather;
    if (error) {
      errmsg = 'Unable to fetch weather';
      callback(errmsg);
    } else {
      // console.log(JSON.stringify(body, null, 4));
      var data = body;
      currentWeather = "It's " + data.main.temp + " in " + data.name + "!";
      callback(currentWeather);
    }
  });
};
