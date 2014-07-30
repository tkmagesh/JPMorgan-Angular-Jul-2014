//Create an object ("spinner") in JavaScript (how?) that exhibits the following behavior
/*
var spinner = ?
spinner.up() //=> 1
spinner.up() //=> 2
spinner.up() //=> 3
spinner.up() //=> 4

spinner.down() //=> 3
spinner.down() //=> 2
spinner.down() //=> 1
spinner.down() //=> 0
spinner.down() //=> -1
*/
//the variable used to track the value should be "PRIVATE"

function getSpinner(){
	var counter = 0;
	function inc(){
		return ++counter;
	}
	function dec(){
		return --counter;
	}
	return {
		up : inc,
		down : dec
	};
}

function getSpinner(){
	var counter = 0;
	return {
		up : function(){
			return ++counter;
		},
		down : function(){
			return --counter;
		}
	}
}

var spinner = (function(){
	var counter = 0;
	return {
		up : function(){
			return ++counter;
		},
		down : function(){
			return --counter;
		}
	}
})();

/*
write a function that determines if the given number is a prime number or not 
(returns true if the the number is prime number, false otherwise).  The algorithm to determine 
the given number is prime or not should not be executed for the same number more than once. 
the function should be able to cache the result and reuse it the next time when the same number 
is passed as an argument

*/

function getPrimeFinder(){
	var cache = {};
	function checkPrime(n){
		if (n <= 3) return true;
		for(var i=2;i<=(n/2);i++)
			if (n % i === 0) return false;
		return true;
	}
	function isPrime(n){
		console.log(cache);
		if (typeof cache[n] !== "undefined"){
			console.log("From cache..");
			return cache[n];
		}
		cache[n] = checkPrime(n);
		console.log("Juz processed...");
		return cache[n];
	}
	return isPrime;
}

function cacheThis(fn){
	var cache = {};
	return function(){
		var key = JSON.stringify(arguments);
		if (typeof cache[key] !== "undefined"){
			console.log("from cache");
			return cache[key];
		};
		cache[key] = fn.apply(this,[].slice.call(arguments,0));
		console.log("Juz processed");
		return cache[key];
	}
}

function alterExec(fn){
   var flag = -1;
   return function(){
       flag = flag * -1;
       if (flag === 1)
          return fn.apply(this,[].slice.call(arguments,0));
   }
}

