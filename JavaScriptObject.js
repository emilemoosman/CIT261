
//
var persons = null;

function savePerson(){
	//
	var person = new Object();
	
	// 
	var aFirstName = document.getElementById("first_Name_input").value;
	var aLastName = document.getElementById("last_Name_input").value;
	var aGender = document.getElementById("gender_input").value;
	var aAge = document.getElementById("age_input").value;
	var aNationality = document.getElementById("nationality_input").value;
	
	//
	person.firstName = aFirstName;
	person.lastName  = aLastName;
	person.gender    = aGender;
	person.age       = aAge;
	person.nationality = aNationality;
	person.returnPerson = function () {
		return this.first + " " + this.last + " is a " + this.age + " year old " 
			+ this.gender + ". " + this.first + " identifies as " + this.nationality 
			+ ".\n";
	};
			
	/*
	person = {
		first: aFirstName,
		last: aLastName,
		gender: aGender,
		age: aAge,
		nationality, aNationality,
		returnPerson, function() {
			return this.first + " " + this.last + " is a " + this.age + "year old " 
			+ this.gender + ". " + this.first + " identifies as " + this.nationality 
			+ ".\n";
		}
	} **/
	
	//
	if(persons == null){
		persons = [];
	}
	
	//
	if ((person.first || person.last || person.gender || person.age
							|| person.nationality) != null)
		persons.push(person);
	
	//
	displayPersons();
	
	//
	var aFirstName = document.getElementById("first_Name_input").value = null;
	var aLastName = document.getElementById("last_Name_input").value = null;
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
