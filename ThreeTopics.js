// Event Listeners
document.getElementById("clickMe").addEventListener("click", myClick);
document.getElementById("mouseMe").addEventListener("mouseover", myMouseOver);
document.getElementById("mouseMe").addEventListener("mouseout", myMouseOut);

/**************************************************
	example of using the click event.
**************************************************/
function myClick() {
	document.getElementById("displayClick").innerHTML = "You clicked the button, well done!";
	document.getElementById("displayClick").classList.toggle("hide");
}

/**************************************************
	example of using the mouse over event.
**************************************************/
function myMouseOver() {
	document.getElementById("mouseMe").style.color = "red";
}

/**************************************************
	example of using the mouse over event.
**************************************************/
function myMouseOut() {
	document.getElementById("mouseMe").style.color = "black";
}