var weather = require('./weather');
var location = require('./location');

//setup yargs o have --location or -l argument
var argv = require('yargs')
	.command('create', 'Create a new account', function (yargs) {
		yargs.options({
			location: {
				demand: true,
				alias: 'l',
				description: 'Account name (eg: Twitter, Facebook)',
				type: 'string'
			}
		}).help('help');
	})
	.help('help')
	.argv;
var command = argv._[0];

console.log(argv.location);
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
