// event listeners

// Paragraphs counter
var counter = 0;

/**************************************************
	Create paragraph HTML elements using the 
	createElement() method.
**************************************************/
function createParagraphs() {
	
	// Create a <p> element. The createElement() method
	// creates an HTML element.
	var para = document.createElement("P");              		
	// Insert text into new HTML element.
	para.innerHTML = "This is a paragraph.";                	
	// Append <p> to <div> with id="displayDiv". The
	// appendChild() method adds a HTML element to 
	// another HTML element.
	document.getElementById("displayDiv").appendChild(para); 
	
	// Create another paragraph element
	var para = document.createElement("P");              		
	para.innerHTML = "Hi, my name is second paragraph.";                	
	document.getElementById("displayDiv").appendChild(para); 
	
	// Added two paragraphs, so increment counter by 2.
	counter += 2;
}

/**************************************************
	Use the insertBefore() method to insert element
	before another element. The insertBefore() method 
	inserts a node as a child, right before an existing 
	child, which you specify.
**************************************************/
function insertParagraph() {
	
	// Create a <p> element (node)
	var para = document.createElement("P");              		
	// Insert text into new HTML element.
	para.innerHTML = "This paragraph was INSERTED as the first paragraph.";
	// Get the parent element, where new HTML element will be inserted.
	var paragraphDiv =  document.getElementById("displayDiv");    
	// Insert our new paragraph, in the parent HTML element, before the child
	// of the parent element, using childNodes[index]
	paragraphDiv.insertBefore(para, paragraphDiv.childNodes[0]); 
	
	// Added one paragraph, so increment counter by 1.
	counter++;
}

/**************************************************
	Remove a child HTML element from its parent HTML element.
	The removeChild() method removes a specified child node of 
	the specified element.
**************************************************/
function removeParagraph() {
	
	// Check first if there are paragraphs in div, "displayDiv"
	if (counter > 0) {
		// Get the parent element with id="displayDiv"
		var paragraphs = document.getElementById("displayDiv");
		// Remove paragraphs first child node (index 0)
		paragraphs.removeChild(paragraphs.childNodes[0]);
		// decrement paragraph counter by 1.
		counter--;
	}	else {
		console.log("Cannot remove, as there are no paragraphs.");	
	}
}

/**************************************************
	Replace an HTML element with another element using 
	the replaceChild() method.
**************************************************/
function replaceParagraph() {
	
	// Check first if there are paragraphs in div, "displayDiv"
	if (counter > 0) {
		// Get the parent element with id="displayDiv"
		var paragraphs = document.getElementById("displayDiv");	
		// Create a <p> element.
		var para = document.createElement("P");              		
		// Insert text into new HTML element.
		para.innerHTML = "This is a REPLACE paragraph.";      		
		// Replace paragraphs first child node (index 0)
		paragraphs.replaceChild(para, paragraphs.childNodes[0]); 	
	} else {
		console.log("Cannot replace, as there are no paragraphs.");	
	}
}

/**************************************************
	This method will cover the code topic,
	'Manipulating CSS Class Properties Using JavaScript'.
	The classList property returns the class name(s) of an 
	element, as a DOMTokenList object. This property is useful 
	to add, remove and toggle CSS classes on an element.
	The classList property is read-only, however, you can 
	modify it by using the add() and remove() methods.
	The classList property is not supported in IE9 and earlier. 
	This method will focus on the toggle feature of using classList.
**************************************************/
function cssManipulation() {
	// get the element IDs
	var bodyElement = document.getElementById("myContent");
	var listElement = document.getElementById("myList");
	var linkElement = document.getElementById("myLink");
   // when function is called, toggle back and forth
	// from the CSS .class passed as a parameter.
	bodyElement.classList.toggle("myBodyStyle");
   listElement.classList.toggle("myListStyle");
	linkElement.classList.toggle("myLinkStyle");	
}