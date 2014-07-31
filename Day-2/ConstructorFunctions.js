function getEmployee(id,name,salary){
	var _id = id,
		_name = name,
		_salary = salary;

	var result = {
		id : function(val){
			if (typeof val === "undefined") return _id;
			if (val > 0) _id = val;
		},
		name : function(val){
			if (typeof val === "undefined") return _name;
			if (val !== "") _name = val;
		},
		salary : function(val){
			if (typeof val === "undefined") return _salary;
			if (val > 0) _salary = val;
		}
	};
	return result;
}

function Employee(id,name,salary){
	if (this.constructor !== arguments.callee)
		return new Employee(id,name,salary);
	var _id = id,
		_name = name,
		_salary = salary;



	this.id = function(val){
		if (typeof val === "undefined") return _id;
		if (val > 0) _id = val;
	};
	this.name = function(val){
		if (typeof val === "undefined") return _name;
		if (val !== "") _name = val;
	};
	this.salary = function(val){
		if (typeof val === "undefined") return _salary;
		if (val > 0) _salary = val;
	};
}



var counter = (function(){
	_val = 0;
	return function(){
		return ++_val;
	}
})();