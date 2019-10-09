// Global persons array to store person objects.
var persons = [];

/*******
	A function created to show evidence of how to
	create a literal object.
*******/
function addPersonToDisplay() {
	
	// Create (declare and initialize) a person 
	// using the literal object method.
	var personExample = {
		
		// objects can contain many values. The values are written as 
		// name : value pairs (name and value separated by a colon).
		first: "John",		//	an example of a name: value pair
		last: "Smith",
		gender: "female",
		age: 25,
		nationality: "Australian",
		// objects can also store methods. An object method is an object 
		// property containing a function definition.
		returnPerson: function() {
			return this.first + " " + this.last + " is a " + this.age + " year old " 
			+ this.gender + ". " + this.first + " identifies as " + this.nationality 
			+ ".\n";
		}
	};
	
	// after creating the person object, add the person to the persons array object.
	persons.push(personExample);
	
	// Call displayPersons to display the person added.
	displayPersons();
}

/*******
	Save a person to the persons array, and display.
*******/
function savePerson(){
	
	// Create a Persons constructor in order to create as many
	// persons as the user desires. A constructor makes it easier to
	// create an instance of an object.
	function Person(aFirst, aLast, aGender, anAge, aNationality) {
		// the this keyword is used to refer to the object itself.
		this.first = aFirst;
		this.last = aLast;
		this.gender = aGender;
		this.age = anAge;
		this.nationality = aNationality;
		// can access properties/values with the . operator, or [].
		this.returnPerson = function() {
			return this["first"] + " " + this["last"] + " is a " + this["age"] + " year old " 
			+ this["gender"] + ". " + this["first"] + " identifies as " + this["nationality"] 
			+ ".\n";			
		}
	}
	
	// fetch the user input from the web page.
	var aFirstName = document.getElementById("first_name_input").value;
	var aLastName = document.getElementById("last_name_input").value;
	var aGender = document.getElementById("gender_input").value;
	var anAge = document.getElementById("age_input").value;
	var aNationality = document.getElementById("nationality_input").value;
	
	// create a person variable from the user input.
	var addPerson = new Person(aFirstName, aLastName, aGender, anAge, aNationality);
	
	// If all the input fields contain user input
	if (addPerson.first && addPerson.last && addPerson.gender && 
		addPerson.age && addPerson.nationality)
		persons.push(addPerson);	// add person object to persons array.
	else	// If any of the input fields do not contain input, display error message to console.
		console.log("Please fill in all boxes to add person to displayed list.");
	
	// Call displayPersons to display persons array.
	displayPersons();
	
	// reset input fields to null.
	var aFirstName = document.getElementById("first_name_input").value = null;
	var aLastName = document.getElementById("last_name_input").value = null;
	var aGender = document.getElementById("gender_input").value = null;
	var aAge = document.getElementById("age_input").value = null;
	var aNationality = document.getElementById("nationality_input").value = null;
}

/*******
	Display all the people in the persons array.
*******/
function displayPersons(){
	// If persons array isn't empty,
	if (persons != null){
		// Store html field, which will display person's array.
		var personDisplayer = document.getElementById("all_persons_display");
		personDisplayer.innerHTML = null;
		
		// loop through persons array and display each person.
		for (var i = 0; i < persons.length; i++) {
			var aPerson = persons[i];
			
			// below is how to call and use the returnPerson() method, which 
			// is part of the person object.
			personDisplayer.innerHTML += "<hr><p>"+ aPerson.returnPerson() +"</p>"
		}
	}
}
