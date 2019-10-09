//
var persons = [];

function displayPerson() {
	
	//
	var personExample = {
		first: "John",
		last: "Smith",
		gender: "female",
		age: 25,
		nationality: "Australian",
		returnPerson: function() {
			return this.first + " " + this.last + " is a " + this.age + " year old " 
			+ this.gender + ". " + this.first + " identifies as " + this.nationality 
			+ ".\n";
		}
	};
	
	//
	persons.push(personExample);
	
	//
	displayPersons();
}

function savePerson(){
	
	// 
	function Person(aFirst, aLast, aGender, anAge, aNationality) {
		this.first = aFirst;
		this.last = aLast;
		this.gender = aGender;
		this.age = anAge;
		this.nationality = aNationality;
		this.returnPerson = function() {
			return this["first"] + " " + this["last"] + " is a " + this["age"] + " year old " 
			+ this["gender"] + ". " + this["first"] + " identifies as " + this["nationality"] 
			+ ".\n";			
		}
	}
	
	// 
	var aFirstName = document.getElementById("first_name_input").value;
	var aLastName = document.getElementById("last_name_input").value;
	var aGender = document.getElementById("gender_input").value;
	var anAge = document.getElementById("age_input").value;
	var aNationality = document.getElementById("nationality_input").value;
	
	//
	var addPerson = new Person(aFirstName, aLastName, aGender, anAge, aNationality);
	
	//
	if (addPerson.first && addPerson.last && addPerson.gender && 
		addPerson.age && addPerson.nationality)
		persons.push(addPerson);
	else
		console.log("Please fill in all boxes to add person to displayed list.");
	
	//
	displayPersons();
	
	//
	var aFirstName = document.getElementById("first_name_input").value = null;
	var aLastName = document.getElementById("last_name_input").value = null;
	var aGender = document.getElementById("gender_input").value = null;
	var aAge = document.getElementById("age_input").value = null;
	var aNationality = document.getElementById("nationality_input").value = null;
}

function displayPersons(){
	if (persons != null){
		var personDisplayer = document.getElementById("all_persons_display");
		personDisplayer.innerHTML = null;
		for (var i = 0; i < persons.length; i++) {
			var aPerson = persons[i];
			personDisplayer.innerHTML += "<hr><p>"+ aPerson.returnPerson() +"</p>"
		}
	}
}
