var request = require('request');
var url = 'http://api.openweathermap.org/data/2.5/weather?appid=9e68a0b2ebf54fac8c4ac127281e612f&q=PortoAlegre&units=metric';
var weather = require('./weather');

request({
  url: url,
  json: true
}, function(error, response, body){
  if (error) {
    console.log('Unable to fetch weather');
  } else {
    // console.log(JSON.stringify(body, null, 4));
    var data = body;
    console.log("It's " + data.main.temp + " in " + data.name + "!");
  }
});
