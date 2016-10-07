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
