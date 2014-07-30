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
}