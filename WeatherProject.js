
// My function, which executes when the button is clicked.
function cityWeather() {

	// Fetch the user input and store in variable.
	var city = document.getElementById('cityID').value;
	
	// 1) Create an XMLHttpRequest() object. This is the keystone of AJAX and is 
	//    used to exchange data with a web server behind the scenes.
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
	
	// 2) After the XMLHttpRequest() object is created, we use the open() and send() methods of 
	//    the XMLHttpRequest object to send our request for data to the open weather server.
	xhttp.open("GET", "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&APPID=6522ccd12045454f5848413f5dc0c874", true);
	xhttp.send();
}

function displayCityUsingLocalStorage(results) {
	/***************************************************************************************
	* Local Storage: The Web Storage API, of which Local Storage is a part, provides mechanisms by 
	* which browsers can store data as key/value pairs. The keys and the values are always strings. The 
	* localStorage mechanism stores data with no expiration date. This means that the stored data will 
	* not be deleted when the browser is closed, and gets cleared only through JavaScript, or from 
	* clearing the Browser cache/Locally Stored Data.
	*
	* The localStorage object is available via the Window.localStorage property, and when invoked will 
	* create an instance of the Storage object, through which data items can be set, retrieved and removed.
	*
	* Web storage is more secure, and large amounts of data can be stored locally, without affecting 
	* website performance. Unlike cookies, the storage limit is far larger (at least 5MB) and 
	* information is never transferred to the server. 
	*
	* Because data is stored in key/value string pairs, the JSON stringify() and parse() methods 
	* naturallyl work well with localStorage.
	***************************************************************************************/
	
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