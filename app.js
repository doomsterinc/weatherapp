var weather = require('./weather');
var location = require('./location');

//setup yargs o have --location or -l argument

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
