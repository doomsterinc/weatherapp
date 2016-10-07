function doWork(data, callback) {
  callback(done);
}

function doWorkPromise(data){
  return new Promisse(function(resolve, reject){
    resolve('everything work');
    // reject({
    //   error: "something bad happened"
    // });
  });
}

doWorkPromise('some Data').then(function(data){
  console.log(data);
})
