// Updating the subheading with current hour, date & time

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let monthName = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

let now = new Date();
let weekday = days[now.getDay()];
let dateMonth = now.getDate();
let month = monthName[now.getMonth()];
let hour = now.getHours();
let minutes = now.getMinutes();

if (minutes.toString().length == 1) {
  minutes = "0" + minutes;
}

let smallHeading = document.querySelector("h2");
smallHeading.innerHTML = `${weekday}, ${month} ${dateMonth}, ${hour}:${minutes}`;

// Update name of the city, temperature, and sub-menu data with API data on load
let colors = [
  "linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%)",
  "linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%)",
];


function displayCityInfo(response) {
  console.log(response.data);
  document.querySelector(
    "h1"
  ).innerHTML = `${response.data.name}, ${response.data.sys.country}`;
  let mainTemperature = Math.round(
    response.data.main.temp)
  document.querySelector("#temperature").innerHTML = `${mainTemperature}˚`;
  document.querySelector("#weather-description").innerHTML =
    response.data.weather[0].description;
  document.querySelector("#temp-hi").innerHTML = Math.round(
    response.data.main.temp_max
  );
  document.querySelector("#temp-lo").innerHTML = Math.round(
    response.data.main.temp_min
  );
  document.querySelector("#feels-like").innerHTML = Math.round(
    response.data.main.feels_like
  );
  document.querySelector("#humidity").innerHTML = response.data.main.humidity;

}
let apiKey = "4cea025489823b86da62835c695c95d3";
let apiUnit = "metric";


function loadPage(cityName) {
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=${apiUnit}`;

  axios.get(apiUrl).then(displayCityInfo);
}

function searchCity(event) {
  event.preventDefault();
  let cityName = document.querySelector("#city-input").value;
  loadPage(cityName);
}

let buttonSearch = document.querySelector("#button-search");
buttonSearch.addEventListener("click", searchCity);

// Change the C to F links and show different temperatures
function showTempCelsius(event) {
  event.preventDefault();
  let tempCelsius2 = (document.querySelector("#crnt-tempt").innerHTML = "19˚");
}

function showTempFahrenheit(event) {
  event.preventDefault();
  let tempFahrenheit2 = (document.querySelector("#crnt-tempt").innerHTML =
    "66˚");
}

let clickCelsius = document.querySelector("#temperature-celsius");
clickCelsius.addEventListener("click", showTempCelsius);

let clickFahrenheit = document.querySelector("#temperature-fahrenheit");
clickFahrenheit.addEventListener("click", showTempFahrenheit);

// Make Current City button to show current city & temperature of user

function showCurrentInfo(response) {
  let latitude = response.coords.latitude;
  let longitude = response.coords.longitude;
  let apiKey = "4cea025489823b86da62835c695c95d3";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`;

  axios.get(apiUrl).then(displayCityInfo);
}

function getCurrentPosition(event) {
  event.preventDefault();

  navigator.geolocation.getCurrentPosition(showCurrentInfo);
}

let buttonCurrentCity = document.querySelector("#button-current");
buttonCurrentCity.addEventListener("click", getCurrentPosition);

loadPage("Rio de Janeiro");
