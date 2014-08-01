var promise = new Promise(function(resolve, reject){
  //simulate a long running operation
  setTimeout(function(){
  	   var result = Math.random();
       console.log("From inside Promise - Operation completed at" + new Date().toString() + " with result = " + result);
       
       resolve(result);
  },5000);
});


function successCallback(result){
	console.log("result from async operation = " + result);
}

promise.then(successCallback);
