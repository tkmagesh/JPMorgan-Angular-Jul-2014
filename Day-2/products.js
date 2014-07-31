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
//min(list,....)
//
function min(list,fieldSelectorFn){
	var result = fieldSelectorFn(list[0]);
	for(var i=1;i<list.length;i++){
		var val = fieldSelectorFn(list[i]);
		if (result > val) result = val;
	}
	return result;
}
/*
max(list,....)
sum(list,....)
avg(list,....)

filter(list,....)
all(list,.....)
any(list,....)

groupBy(list,....)
*/

function max(list,fieldSelectorFn){
	var result = fieldSelectorFn(list[0]);
	for(var i=1;i<list.length;i++){
		var val = fieldSelectorFn(list[i]);
		if (result < val) result = val;
	}
	return result;
}

function sum(list,fieldSelectorFn){
	var result = 0;
	for(var i=0;i<list.length;i++){
		var val = fieldSelectorFn(list[i]);
		result += val;
	}
	return result;
}

function filter(list, predicate){
	var result = [];
	for(var i=0;i<list.length;i++)
		if (predicate(list[i]))
			result.push(list[i]);
	return result;
}
var costlyProductCriteriaFn = function(p){ return p.cost > 50;}
var costlyProducts = filter(products,costlyProductCriteriaFn);
console.log("Costly products [cost > 50]")
console.table(costlyProducts);

function all(list, predicate){
	for(var i=0;i<list.length;i++)
		if (!predicate(list[i]))
			return false;
	return true;
}

function any(list, predicate){
	for(var i=0;i<list.length;i++)
		if (predicate(list[i]))
			return true;
	return false;
}

function groupBy(list,fieldSelectorFn){
	var result = {};
	for(var i=0;i<list.length;i++){
		var key = fieldSelectorFn(list[i]);
		if (typeof result[key] === "undefined")
			result[key] = [];
		result[key].push(list[i]);
	}
	return result;
}

var categoryFieldSelectorFn = function(p){ return p.category; };

var productsByCategory = groupBy(products, categoryFieldSelectorFn);
console.table(productsByCategory[1]);
console.table(productsByCategory[2]);

function productsCategoryByCost(p){
  return p.cost > 50 ? "costly" : "affordable";
}
var productsByCost = groupBy(products,productsCategoryByCost)
console.table(productsByCost.affordable);
console.table(productsByCost.costly);


var categories = [
	{id : 1, name : "Stationary"},
	{id : 2, name : "Grocery"}
];

function join(leftList, rightList, leftKeyAttrName, rightKeyAttrName, mergeFn){
	var result = [];
	for(var i=0;i<leftList.length;i++){
		var leftItem = leftList[i],
			leftKey = leftItem[leftKeyAttrName];
		for(var j=0;j<rightList.length;j++){
			var rightItem = rightList[j],
				rightKey = rightItem[rightKeyAttrName];
			if (leftKey === rightKey){
				result.push(mergeFn(leftItem,rightItem));
			}
		}
	}
	return result;
}
var productsWithCategoryNames = join(products,categories,"category","id",function(p,c){
	return {id : p.id, name : p.name, cost : p.cost, units : p.units, category : c.name};
});
console.table(productsWithCategoryNames);

function indexBy(list,iterator){
	var fieldSelectorFn = typeof iterator === "function" ? iterator : function(item){ return item[iterator]};
	var result = {};
	for(var i=0;i<list.length;i++)
		result[fieldSelectorFn(list[i])] = list[i];
	
	return result;
}