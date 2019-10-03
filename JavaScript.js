/**
	Functions
**/

/**
	name: performAddition
	Retrieves user input, calculates and displays the sum.
	parameters: none.
	return: nothing.
**/
function performAddition(){
	
	// Constant variables
	const FIRST  = 1;
	const SECOND = 2;
	
	// Variables
	let sum;
	
	// Arrays
	var arrayOne = [1, 6, 13, 45, 22, 18];
	var arrayTwo = [90, 5, 41, 26, 15, 8];
	
	// Conditionals
	if (document.getElementById("input").value == FIRST)
		sum = returnSum(arrayOne);		// function call
	else
		sum = returnSum(arrayTwo);		// function call
	
	//
	displaySum(sum);
	
}

/**
	name: returnSum
	Returns the sum of each element in array parameter.
	parameters: An array of numbers.
	return: a sum.
**/
function returnSum(array) {
	
	//
	var sum = 0;
	
	// Loops
	for (i = 0; i < array.length; i++) {
		console.log("array[" + i + "] = " + array[i]);
		//
		sum += array[i];
	}
	
	//
	return sum;
}	


/**
	name: displaySum
	Display the calculated sum.
	parameters: An number representing the calculated sum.
	return: nothing.
**/
function displaySum(sum) {
	
	//
	var sumDisplayer = document.getElementById("display_sum");
	//sumDisplayer.innerHTML = null;
	sumDisplayer.innerHTML = "<hr><p>The sum is "+ sum +"</p>";

}	 		
