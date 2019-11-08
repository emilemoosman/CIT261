// Event Listeners for JavaScript Events
document.getElementById("clickMe").addEventListener("click", myClick);
document.getElementById("mouseMe").addEventListener("mouseover", myMouseOver);
document.getElementById("mouseMe").addEventListener("mouseout", myMouseOut);

// Event Listener for HTML5 Canvas element
document.addEventListener('DOMContentLoaded',displayCanvas,false);

// Event Listeners for animation and transtition
document.getElementById("myTransition").addEventListener("click", runTransition);
var anim = document.getElementById("myAnimation");
anim.addEventListener("click", runAnimation);
// Code for Chrome, Safari and Opera
anim.addEventListener("webkitAnimationStart", myStartFunction);
anim.addEventListener("webkitAnimationIteration", myRepeatFunction);
anim.addEventListener("webkitAnimationEnd", myEndFunction);
// Standard syntax
anim.addEventListener("animationstart", myStartFunction);
anim.addEventListener("animationiteration", myRepeatFunction);
anim.addEventListener("animationend", myEndFunction);



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




/**************************************************
	create and run transition.
**************************************************/
function runTransition() {
	document.getElementById("myTransition").classList.toggle("change");
}

/**************************************************
	create and run animation.
**************************************************/
function runAnimation() {
	var element = document.getElementById("myAnimation");
	element.style.WebkitAnimation = "mymove 4s 2"; // Code for Chrome, Safari and Opera
	element.style.animation = "mymove 4s 2";       // Standard syntax
}

function myStartFunction() {
  this.innerHTML = "animationstart event occured - The animation has started";
  this.style.backgroundColor = "pink";
}

function myRepeatFunction() {
  this.innerHTML = "animationiteration event occured - The animation was played again";
  this.style.backgroundColor = "lightblue";
}

function myEndFunction() {
  this.innerHTML = "animationend event occured - The animation has completed";
  this.style.backgroundColor = "lightgray";
}

/**************************************************
	create and run transition and transformation.
**************************************************/


/**************************************************
	example using the canvas html, coupled with 
	javascript (this function) to render a drawing.
	
	I encountered a problem trying to using javascript in an
	external javascript file when drawing using the canvas
	tag, but the stackoverflow article below helped me find
	a solution. I learned that the script was being run,
	before the canvas element was rendering. I added an eventListener
	to listen for a DOMContentLoaded event. The DOMContentLoaded event 
	fires when the initial HTML document has been completely loaded and 
	parsed, without waiting for stylesheets, images, and subframes to 
	finish loading. After following the instruction in the article, my
	canvas rendered to screen.
	
	https://stackoverflow.com/questions/11349613/html5-canvas-not-working-in-external-javascript-file**************************************************/
function displayCanvas() {
	// get canvas element ID.
	var c=document.getElementById('myCanvas');
	var ctx=c.getContext('2d');
	
	// Create gradient
	var grd = ctx.createRadialGradient(400, 200, 100, 800, 400, 100);
	grd.addColorStop(0, "red");
	grd.addColorStop(1, "white");

	// Fill with gradient. Originally I wanted the gradient to fill the,
	// whole canvas element, but when I seen how cool it looked, I kept it.
	ctx.fillStyle = grd;
	ctx.fillRect(0, 0, 800, 400);

	// Draw a circle in the middle of canvas.
	//ctx.moveTo(400, 200);
	ctx.arc(400, 200, 100, 0, 2 * Math.PI);
	ctx.stroke();
	
	// Draw a line from top left to bottom right.
	ctx.moveTo(0, 0);
	ctx.lineTo(800, 400);
	ctx.stroke();
	
	// Draw a line from bottom left to top right.
	ctx.moveTo(800, 0);
	ctx.lineTo(0, 400);
	ctx.stroke();
}; 