// function doWork(data, callback) {
//   callback(done);
// }
//
// function doWorkPromise(data){
//   return new Promise(function(resolve, reject){
//     setTimeout(function(){
//       reject('everything is broken');
//     },1000);
//     // reject({
//     //   error: "something bad happened"
//     // });
//   });
// }
//
// doWorkPromise('some Data').then(function(data){
//   console.log(data);
// }, function(error){
//   console.log(error);
// });
var request = require('request');

function getWeather(location){
    return new Promise(function (resolve, response){
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

getWeather('new york').then(function(currentweather){
  console.log(currentweather);
}, function(error){
  console.log(error);
})
