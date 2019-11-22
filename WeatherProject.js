/*************************************************
 * This function executes when the button is clicked.
 ************************************************/
function cityWeather() {

	// Fetch the user input and store in variable.
	var city = document.getElementById('cityID').value;
	
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
				displayCityUsingLocalStorage(results);
			} else {
				// Sorry! No Web Storage support...
				// Parse the xhttp response (JavaScript string) into a JavaScript object, and
				// display items to screen.
				var data = JSON.parse(xhttp.responseText);
				
				// display to html element the current weather and weather description of the city 
				// name entered by the user.
				results.innerHTML += '<li>' + 'The current temperature in ' + data.name + ' is ' 
				+ data.main.temp + '&#8451;, with ' + data.weather[0].description + '.</li>';
			}						
		}
		
		// If readyState status is 'finished an response is ready', and, the status is a Bad Request
		// i.e. no user input...		
		if (this.readyState == 4 && this.status == 400) {
			// display appropriate error message
			window.alert("Please enter a city name in the input box.");
		}
		// If readyState status is 'finished an response is ready', and, the status is Page not found
		// i.e. the city doesn't exist...
		if (this.readyState == 4 && this.status == 404) {
			// display appropriate error message
			window.alert("City not found. Please enter a valid city name.");
		}
	};
	
	// 2) After the XMLHttpRequest() object is created, use the open() and send() methods of 
	//    the XMLHttpRequest object to send our request for data to the open weather server.
	xhttp.open("GET", "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&APPID=6522ccd12045454f5848413f5dc0c874", true);
	xhttp.send();
}

/*************************************************
 * If a correct city name is entered, this function
 * is called, which displays the city weather data
 * to display. This is done using local storage. 
 ************************************************/
function displayCityUsingLocalStorage(results) {

	// Retrieve from local storage our city weather data.
	var cityWeatherString = localStorage.getItem("cityWeather");
	
	// log to console
	console.log("cityWeather in local storage contained the following weather data\n"+ cityWeatherString);
	
	// Parse the city weather string into an object
	var cityData = JSON.parse(cityWeatherString);
	
	// Extract information from the weather object
	var cityName    = cityData.name;
	var weatherDesc = cityData.weather[0].description;
	var weatherTemp = cityData.main.temp;
	
	// Store extracted information into localStorage
	localStorage.setItem("cityNameLS", cityName);
	localStorage.setItem("weatherLS", weatherDesc);
	localStorage.setItem("temperatureLS", weatherTemp);
	
	// log to console
	console.log(localStorage.getItem("cityNameLS"));
	console.log(localStorage.getItem("weatherLS"));
	console.log(localStorage.getItem("temperatureLS"));
	
	// display to browser city info by using localStorage retrievals.
	results.innerHTML += '<li>' + 'The current temperature in ' 
	+ localStorage.getItem("cityNameLS") 
	+ ' is ' + localStorage.getItem("temperatureLS") + '&#8451;, with ' 
	+ localStorage.getItem("weatherLS") + '.</li>';			
}