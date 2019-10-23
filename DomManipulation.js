// event listeners


/**************************************************
	Create paragraph HTML elements
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
	para.innerHTML = "This paragraph was INSERTED before the second paragraph.";
	// Get the parent element, where new HTML element will be inserted.
	var paragraphDiv =  document.getElementById("displayDiv");    
	// Insert our new paragraph, in the parent HTML element, before the child
	// of the parent element, using childNodes[index]
	paragraphDiv.insertBefore(para, paragraphDiv.childNodes[1]); 
}

/**************************************************
	Remove a child HTML element from its parent HTML element.
	The removeChild() method removes a specified child node of 
	the specified element.
**************************************************/
function removeParagraph() {
	
	// Get the parent element with id="displayDiv"
	var paragraphs = document.getElementById("displayDiv");
	// Remove paragraphs first child node (index 0)
	paragraphs.removeChild(paragraphs.childNodes[0]);           
	
}











/*************************
	Create an element
*************************/