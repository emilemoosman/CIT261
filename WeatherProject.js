// Event Listener for button and DOMContentLoaded
document.getElementById("clickMe").addEventListener("click", cityWeather);
// The DOMContentLoaded event fires when the initial HTML document has been 
// completely loaded and parsed, without waiting for stylesheets, images, 
// and subframes to finish loading.
// I added this event listener to display from local storage city data last
// stored. This will occur when the page is loaded.
window.addEventListener('DOMContentLoaded', displayCity);

// Execute a function when the user releases a key on the keyboard (enter key)
// https://www.w3schools.com/howto/howto_js_trigger_button_enter.asp
document.getElementById("cityID").addEventListener("keyup", function(event) {
	// Number 13 is the "Enter" key on the keyboard
	if (event.keyCode === 13) {
		// Cancel the default action, if needed
		event.preventDefault();
		// Trigger the button element with a click
		document.getElementById("clickMe").click();
	}
});

/*************************************************
 * This function executes when the button is clicked.
 ************************************************/
function cityWeather() {

	// Fetch the city name user input and store in variable.
	var city = document.getElementById('cityID').value;
	
	// After adding the select country options, I needed to add this to check if the user didn't 
	// enter a city name. BEFORE adding the select country options, which included adding the selected
	// country value (line 45) to the XMLHttpRequest() request (line 143), THE XMLHttpRequest status == 400
	// (line 110) would catch if there was no user input. AFTER adding the select country options, the
	// XMLHttpRequest status == 400 wasn't catching no city name user input.
	if (!city) {	// If the user did not enter a city name...
		window.alert("Please enter a city name or zip code.");	// ...display error message,
		return;		// and stop execution of the cityWeather() method.
	}
	
	// Fetch the value of the country option selected by the user. The value associated with each option
	// is the ISO 3166-1 Alpha-2 Code for the selected country, which will be included in the 
	// XMLHttpRequest API call to openweathermap.org (line 143). Doing this will allow the user to 
	// search for a city specific to the country selected. This allows for unique searches of cities 
	// which share the same name, but located in different countries.
	var country = document.getElementById("ISO_3166_1_Alpha_2").value;
	
	/// Comments with three backslashes block out code I plan on working on after finishing course. 
	/// Use the REST COUNTRIES API to get the ISO 3166-1 alpha-2 country code
	/// var code = getCountryCode(country);
	
	// Check whether user entered a city name or zip code (number), and adjust the API url call if needed.
	var apiCall = "https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?q=";
	if (Number.parseInt(city)) {	// if user enter a zip code, make a little change to apiCall variable.
		apiCall = "https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?zip=";
	}		
	
	// 1) Create an XMLHttpRequest() object, in order to exchange data with 
	// a web server behind the scenes.
	var xhttp = new XMLHttpRequest();
	
	// Store element which will display the city messages.
	var results = document.getElementById('displayDiv');
	
	// 3) The server processes the request,
	// 4) The server sends a response back to the web page,

	// 5) The response is read by JavaScript. The readyState property holds the status of 
	//    the XMLHttpRequest. The onreadystatechange property defines a function to be executed 
	//    when the readyState changes. The status property and the statusText property holds 
	//    the status of the XMLHttpRequest object.		
	xhttp.onreadystatechange = function () {
		// If readyState status is 'finished an response is ready', and, the status is OK...
		if (this.readyState == 4 && this.status == 200) {
			// 6) Perform desired action resulting from successfully using AJAX to pull
			// 	data from a web server.
			
			// Check if web storage is supported.
			if (typeof(Storage) !== "undefined") {
				// store in localStorage. 
				// The key is "cityWeather". The value is xhttp.responseText. 
				// The xhttp.responseText property returns the server response as a JavaScript string.
				localStorage.setItem("cityWeather", xhttp.responseText);
				// call displayCity() to display city weather info
				displayCity();
			} else {
				// Sorry! No Web Storage support...
				// Parse the xhttp response (JavaScript string) into a JavaScript object, and
				// display items to screen.
				var cityData = JSON.parse(xhttp.responseText);
				
				// Extract and store required weather information from the object
				var cityName    = cityData.name;
				var weatherDesc = cityData.weather[0].description;
				var weatherTemp = cityData.main.temp;
				var weatherIcon = cityData.weather[0].icon;
				var iconURL     = "https://cors-anywhere.herokuapp.com/http://openweathermap.org/img/wn/" + weatherIcon + "@2x.png";
				
				// display city weather data by...
				// Creating a <p> element.
				var newParagraph = document.createElement("P");              		
				// Inserting city weather info into new HTML element.
				newParagraph.innerHTML = "The current temperature in " + cityName 
				+ " is " + weatherTemp + "&#8451;, with " + weatherDesc + ".";      		
				// Replacing first child node (index 0), a paragraph, of results DIV element,
				// with newly created paragraph.
				results.replaceChild(newParagraph, results.childNodes[0]); 	
				
				// Display the weather icon from openweathermap.org
				results.childNodes[1].innerHTML = "<img src=" + iconURL + ">";
			}						
		}
		
		// If readyState status is 'finished an response is ready', and, the status is a Bad Request
		// i.e. no user input...		
		if (this.readyState == 4 && this.status == 400) {
			// display appropriate error message
			window.alert("Please enter a city name in the input box.");
		}
		// If readyState status is 'finished an response is ready', and, the status is Page not found
		// i.e. the city doesn't exist in the selected country...
		if (this.readyState == 4 && this.status == 404) {
			// get the countries select tag...
			var countries = document.getElementById("ISO_3166_1_Alpha_2");
			// ... and the country name of the selected option for error msg.
			var countryName = countries.options[countries.selectedIndex].text;
			// check if city user input is a name or zip code and adjust error msg accordingly.
			cityMsg = city;
			if (Number.parseInt(city))
				cityMsg = "City with zip code " + city;
			
			// display an appropriate error message.
			window.alert(cityMsg + " is not found in " 
			+ countryName 
			+ ". Please enter a valid city name or zip code.");
		}
	};
	
	// 2) After the XMLHttpRequest() object is created, use the open() and send() methods of 
	//    the XMLHttpRequest object to send our request for data to the open weather server.
	//		Added the cors-anywhere.herokuapp.com address because of issues with loading a http request
	//    using AJAX, over a https page in github pages (where my web app is stored).
	//    https://stackoverflow.com/questions/33507566/mixed-content-blocked-when-running-an-http-ajax-operation-in-an-https-page
	xhttp.open("GET", apiCall + city + "," + country + "&units=metric&APPID=6522ccd12045454f5848413f5dc0c874", true);
	xhttp.send();
}

/*************************************************
 * If a correct city name is entered, this function
 * is called, which displays the city weather data
 * to display. 
 ************************************************/
function displayCity() {
	// Testing
	console.log("displayCity() was called");
	
	// Store element which will display the city messages.
	var results = document.getElementById('displayDiv');

	// Retrieve from local storage our city weather data.
	var cityWeatherString = localStorage.getItem("cityWeather");
	
	// log to console
	console.log("cityWeather in local storage contained the following weather data\n" + cityWeatherString);
	
	// Parse the city weather string into an object
	var cityData = JSON.parse(cityWeatherString);
	
	// Extract and store required weather information from the weather object
	var cityName    = cityData.name;
	var weatherDesc = cityData.weather[0].description;
	var weatherTemp = cityData.main.temp;
	var weatherIcon = cityData.weather[0].icon;
	var iconURL     = "http://openweathermap.org/img/wn/" + weatherIcon + "@2x.png";
	
	// log weather variable data to console
	console.log("City name is " + cityName);
	console.log("Weather is " + weatherDesc);
	console.log("Temperature is " + weatherTemp);
	console.log("Weather icon is " + weatherIcon);
	
	// Create a <p> element.
	var newParagraph = document.createElement("P");              		
	// Insert city weather info into new HTML element.
	newParagraph.innerHTML = "The current temperature in " + cityName 
	+ " is " + weatherTemp + "&#8451;, with " + weatherDesc + ".";      		
	// Replace first child node (index 0), a paragraph, of results DIV element,
	// with newly created paragraph.
	results.replaceChild(newParagraph, results.childNodes[0]); 	
	
	// Display the weather icon from openweathermap.org
	results.childNodes[1].innerHTML = "<img src=" + iconURL + ">";
}

/*************************************************
 * Not part of assignment. Will work to integrate the commented out 
 * method after course completion. My intent is to integrate the 
 * REST COUNTRIES API into project after course completion. 
 ************************************************
function getCountryCode(country) {
	//
	//if (country) {
	//	country = "US";
	//	return country;
	//}
	
	// native or partial name
	var nameData = "https://restcountries.eu/rest/v2/name/" + country;
	
	// Full name
	var countryData = "https://restcountries.eu/rest/v2/name/" + country + "?fullText=true";
	
	console.log("Country data is " + countryData);
	
	//
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			 alert(this.responseText);
			 console.log(this.responseText);
		}
		
		// If readyState status is 'finished an response is ready', and, the status is a Bad Request
		// i.e. no user input...		
		if (this.readyState == 4 && this.status == 400) {
			// display appropriate error message
			window.alert("Please enter a country name.");
		}
		// If readyState status is 'finished an response is ready', and, the status is Page not found
		// i.e. the city doesn't exist...
		if (this.readyState == 4 && this.status == 404) {
			// display appropriate error message
			window.alert("Country not found. Please enter a valid country.");
		}
	};
	xhttp.open("GET", countryData, true);
	xhttp.send();
	
	return country;
}
***/























