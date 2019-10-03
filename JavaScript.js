/**
	Functions: a block of code designed to perform a particular task. 
	A JavaScript function is executed when "something" invokes it (calls it).
	The parentheses may include parameter names separated by commas. 
**/

/**
	name: performAddition
	Retrieves user input, calculates and displays the sum.
	parameters: none.
	return: nothing.
**/
function performAddition(){
	
	// Constant variable - a value that once declared can never be changed.
	const FIRST  = 1;
	
	/**
		Variables: Containers for storing data values. You start by 
		declaring a variable with the var or the let keyword, followed 
		by any name you want to call it. Variables can contain just about 
		anything — not just strings and numbers. Variables can also contain 
		complex data and even entire functions to do amazing things.
	**/
	let sum;
	
	/**
		Arrays arrays are used to store multiple values in a single variable. 
		An array is a special variable, which can hold more than one value at 
		a time. 
		Arrays are a special type of objects. You can have objects in an Array. 
		You can have functions in an Array. You can have arrays in an Array.
	**/
	var arrayOne = [1, 6, 13, 45, 22, 18];
	var arrayTwo = [90, 5, 41, 26, 15, 8];
	
	/**
		Conditionals - Code structures which allow you to test if an expression 
		is true, and then run alternative code depending on the result. 
	**/
	if (document.getElementById("input").value == FIRST)
		sum = returnSum(arrayOne);		// function call
	else
		sum = returnSum(arrayTwo);		// function call
	
	// function call, which accepts the sum as a parameter,
	// and will display the sum in the html.
	displaySum(sum);
}

/**
	name: returnSum
	Returns the sum of each element in array parameter.
	parameters: An array of numbers.
	return: a sum.
**/
function returnSum(array) {
	
	// declare and initialize a variable.
	var sum = 0;
	
	// Loops: Execute a block of code a number of times. They include
	// the do-while, while, and for loop structures.
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
	
	// store the document element id in a variable.
	var sumDisplayer = document.getElementById("display_sum");
	// display in the relevant element, the below string.
	sumDisplayer.innerHTML = "<hr><p>The sum is "+ sum +"</p>";

}	 		
