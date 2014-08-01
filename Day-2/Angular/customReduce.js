function reduce(list, reduceFn, seed){
	var result = seed;
	for(var i=0;i<list.length;i++){
		result = reduceFn(list[i],result);
	}
	return result;
}

var numbers = [10,11,12,13,14,15]
var evenCount = reduce(numbers, function(n,result){
	return n % 2 === 0 ? ++result : result;
},0)