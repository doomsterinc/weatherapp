function doWork(data, callback) {
  callback(done);
}

function doWorkPromisse(data){
  return new Promisse(function(resolve, reject){
    resolve('everything work');
    reject({
      error: "something bad happened"
    });
  });
}
