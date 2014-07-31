var products =[
	{id : 7, name:"Pen", cost :30, units :30, category : 2},
	{id : 3, name:"Hen", cost :90, units :80, category : 1},
	{id : 6, name:"Ten", cost :80, units :40, category : 1},
	{id : 2, name:"Den", cost :70, units :70, category : 2},
	{id : 8, name:"Len", cost :60, units :20, category : 2},
	{id : 5, name:"Zen", cost :50, units :10, category : 1}
];

console.log("Initial List..");
console.table(products);
var sort = function(list,attrName){
	for(var i=0;i<list.length-1;i++)
		for(var j=i+1;j<list.length;j++){
			var left = list[i],
				right = list[j];
			if (left[attrName] > right[attrName]){
				list[i] = list[j];
				list[j] = left;
			}
		}

}
//Sort

console.log("After sorting by id");
sort(products,"id");
console.table(products);

console.log("After sorting by cost");
sort(products,"cost");
console.table(products);

var sort = function(list, comparerFn){
	for(var i=0;i<list.length-1;i++)
		for(var j=i+1;j<list.length;j++){
			var left = list[i],
				right = list[j];
			if (comparerFn(left,right) > 0){
				list[i] = list[j];
				list[j] = left;
			}
		}
}
var productComparerByValue = function(p1,p2){
	var p1Value = p1.units *p1.cost,
		p2Value = p2.units * p2.cost;
	if (p1Value > p2Value) return 1;
	if (p1Value < p2Value) return -1;
	return 0;
}

console.log("After sorting by value [using comparerFn");
sort(products,productComparerByValue);
console.table(products);

//
/*min(list,....)
max(list,....)
sum(list,....)
avg(list,....)

filter(list,....)
all(list,.....)
any(list,....)

groupBy(list,....)*/

/*
var categories = [
	{id : 1, name : "Stationary"},
	{id : 2, name : "Grocery"}
];

join(products,categories,......)
*/