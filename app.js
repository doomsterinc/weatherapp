var weather = require('./weather');
var location = require('./location');

//setup yargs o have --location or -l argument
var argv = require('yargs')
	.options('location', {
    alias: 'l',
    demand: false,
    describe: 'Location to fetch weather for',
    type: 'string'
  })
  .help('help')
  .argv;

// weather(function(currentWeather){
//   console.log(currentWeather);
// });
//
// location(function(location) {
//   if (!location) {
//     console.log("Unable to guess location!");
//     return;
//   }
//   console.log("city: " + location.city);
//   console.log("lag/log: " + location.loc);
// });

//if location provided
//  call weather(location, callback)
//else
//  call location
//      call weather(location, callback)
if (typeof argv.l === 'string') {
  weather(argv.l, function(currentWeather){
    console.log(currentWeather);
  })
} else {
  location(function(location){
    if (!location) {
      console.log("Unable to guess location!");
      return;
    }
    weather(location.city, function(currentWeather){
      console.log(currentWeather);
    });
  })
}
