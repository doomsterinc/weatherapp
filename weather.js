var request = require('request');


module.exports = function (location) {
  return new Promise(function(resolve, reject){
    var encodLocation = encodeURIComponent(location);
    var url = 'http://api.openweathermap.org/data/2.5/weather?appid=9e68a0b2ebf54fac8c4ac127281e612f&q=' + encodLocation + '&units=metric';
    if (!location) {
      return reject("No location provided");
    }

    request({
      url: url,
      json: true
    }, function(error, response, body){
      var errmsg, currentWeather;
      if (error) {
        errmsg = 'Unable to fetch weather';
        reject(errmsg);
      } else {
        var data = body;
        currentWeather = "It's " + data.main.temp + " in " + data.name + "!";
        resolve(currentWeather);
      }
    });
  });
};
