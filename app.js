var weather = require('./weather');
var location = require('./location');

weather(function(currentWeather){
  console.log(currentWeather);
});

location(function(location) {
  console.log("city" + location.city);
});
