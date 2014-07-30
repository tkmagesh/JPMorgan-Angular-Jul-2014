window.addEventListener("DOMContentLoaded", init);
function init(){
	test("Should be able to add two numbers", function(){
		//arrange
		var number1 = 10,
			number2 = 20,
			expectedResult = 30;

		//act
		var actualResult = add(number1, number2);

		//assert
		return actualResult === expectedResult;
	});

	test("Should be able to add two numbers in string format", function(){
		//arrange
		var number1 = "10",
			number2 = "20",
			expectedResult = 30;

		//act
		var actualResult = add(number1, number2);

		//assert
		return actualResult === expectedResult;
	});

	test("Should be able to treat non numeric strings as zero", function(){
		//arrange
		var number1 = 10,
			number2 = "abc",
			expectedResult = 10;

		//act
		var actualResult = add(number1, number2);

		//assert
		return actualResult === expectedResult;
	});

	test("Should be able to add two functions returning numbers", function(){
		//arrange
		var f1 = function(){ return 10; },
			f2 = function(){ return 20; },
			expectedResult = 30;

		//act
		var actualResult = add(f1, f2);

		//assert
		return actualResult === expectedResult;
	});
	test("Should be able to add two functions returning functions returning numbers", function(){
		//arrange
		var f1 = function() {return function(){ return 10; }},
			f2 = function() {return function(){ return 20; }},
			expectedResult = 30;

		//act
		var actualResult = add(f1, f2);

		//assert
		return actualResult === expectedResult;
	});

	test("Should be able to add only one number", function(){
		//arrange
		var number1 = "10",
			expectedResult = 10;

		//act
		var actualResult = add(number1);

		//assert
		return actualResult === expectedResult;
	});

	test("Should return zero when no arguments are passed", function(){
		//arrange
		var	expectedResult = 0;

		//act
		var actualResult = add();

		//assert
		return actualResult === expectedResult;
	});
	test("Should be able to add a variable number of numbers and strings", function(){
		//arrange
		var	expectedResult = 100;

		//act
		var actualResult = add(10,"20",30,"40");

		//assert
		return actualResult === expectedResult;
	});
	test("Should be able to add an array of numbers", function(){
		//arrange
		var	expectedResult = 100,
			numbers = [10,20,30,40];

		//act
		var actualResult = add(numbers);

		//assert
		return actualResult === expectedResult;
	});
	test("Should be able to add multiple  array of numbers", function(){
		//arrange
		var	expectedResult = 100,
			numbers1 = [10,20]
			numbers2 = [30,40];

		//act
		var actualResult = add(numbers1, numbers2);

		//assert
		return actualResult === expectedResult;
	});
	test("Should be able to add a nested array of numbers", function(){
		//arrange
		var	expectedResult = 100,
			numbers = [10,[20,[30,[40]]]];

		//act
		var actualResult = add(numbers);

		//assert
		return actualResult === expectedResult;
	});
	test("Should be able to add two functions returning array of numbers", function(){
		//arrange
		var f1 = function(){ return [10,20]; },
			f2 = function(){ return [30,40]; },
			expectedResult = 100;

		//act
		var actualResult = add(f1, f2);

		//assert
		return actualResult === expectedResult;
	});
	test("Should be able to add an array of functions returning array of numbers", function(){
		//arrange
		var f1 = function(){ return [10,20]; },
			f2 = function(){ return [30,40]; },
			expectedResult = 100;

		//act
		var actualResult = add([f1, f2]);

		//assert
		return actualResult === expectedResult;
	});

}