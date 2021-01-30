// Updating the subheading with current hour, date & time
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
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

// Updating weekday names
let nextDay = document.querySelector(".next-day");
nextDay.innerHTML = days[now.getDay() + 1];

let secondDay = document.querySelector(".second-day");
secondDay.innerHTML = days[now.getDay() + 2];

let thirdDay = document.querySelector(".third-day");
thirdDay.innerHTML = days[now.getDay() + 3];

let fourthDay = document.querySelector(".fourth-day");
fourthDay.innerHTML = days[now.getDay() + 4];

let fifthDay = document.querySelector(".fifth-day");
fifthDay.innerHTML = days[now.getDay() + 5];

let sixthDay = document.querySelector(".sixth-day");
sixthDay.innerHTML = days[now.getDay() + 6];

// Update name of the city, temperature, and sub-menu data with API data on load
function displayCityInfo(response) {
  console.log(response.data);

  let weatherIcon = document.querySelector("#weather-icon");
  weatherIcon.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.current.weather[0].icon}@2x.png`
  );
  weatherIcon.setAttribute(
    "alt",
    `${response.data.current.weather[0].description}`
  );

  document.querySelector("#weather-description").innerHTML =
    response.data.current.weather[0].description;

  let mainTemperature = document.querySelector("#temperature");
  mainTemperature.innerHTML = `${Math.round(response.data.current.temp)}˚`;

  document.querySelector("#feels-like").innerHTML = Math.round(
    response.data.current.feels_like
  );

  document.querySelector("#temp-hi").innerHTML = Math.round(
    response.data.daily[0].temp.max
  );

  document.querySelector("#temp-lo").innerHTML = Math.round(
    response.data.daily[0].temp.min
  );

  document.querySelector("#humidity").innerHTML =
    response.data.current.humidity;

  document.querySelector(".wind-speed").innerHTML = Math.round(
    `${response.data.current.wind_speed}`
  );

  // Forecast of the week
  document.querySelector(".next-day-temp").innerHTML =
    Math.round(`${response.data.daily[1].temp.max}`) +
    "˚ | " +
    Math.round(`${response.data.daily[1].temp.min}`) +
    "˚";

  let nextDayIcon = document.querySelector("#next-day-icon");
  nextDayIcon.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.daily[1].weather[0].icon}@2x.png`
  );
  nextDayIcon.setAttribute(
    "alt",
    `${response.data.daily[1].weather[0].description}`
  );

  document.querySelector(".second-day-temp").innerHTML =
    Math.round(`${response.data.daily[2].temp.max}`) +
    "˚ | " +
    Math.round(`${response.data.daily[2].temp.min}`) +
    "˚";

  let secondDayIcon = document.querySelector("#second-day-icon");
  secondDayIcon.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.daily[2].weather[0].icon}@2x.png`
  );
  secondDayIcon.setAttribute(
    "alt",
    `${response.data.daily[2].weather[0].description}`
  );

  document.querySelector(".third-day-temp").innerHTML =
    Math.round(`${response.data.daily[3].temp.max}`) +
    "˚ | " +
    Math.round(`${response.data.daily[3].temp.min}`) +
    "˚";

  let thirdDayIcon = document.querySelector("#third-day-icon");
  thirdDayIcon.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.daily[3].weather[0].icon}@2x.png`
  );
  thirdDayIcon.setAttribute(
    "alt",
    `${response.data.daily[3].weather[0].description}`
  );

  document.querySelector(".fourth-day-temp").innerHTML =
    Math.round(`${response.data.daily[4].temp.max}`) +
    "˚ | " +
    Math.round(`${response.data.daily[4].temp.min}`) +
    "˚";

  let fourthDayIcon = document.querySelector("#fourth-day-icon");
  fourthDayIcon.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.daily[4].weather[0].icon}@2x.png`
  );
  fourthDayIcon.setAttribute(
    "alt",
    `${response.data.daily[4].weather[0].description}`
  );

  document.querySelector(".fifth-day-temp").innerHTML =
    Math.round(`${response.data.daily[5].temp.max}`) +
    "˚ | " +
    Math.round(`${response.data.daily[5].temp.min}`) +
    "˚";

  let fifthDayIcon = document.querySelector("#fifth-day-icon");
  fifthDayIcon.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.daily[5].weather[0].icon}@2x.png`
  );
  fifthDayIcon.setAttribute(
    "alt",
    `${response.data.daily[5].weather[0].description}`
  );

  document.querySelector(".sixth-day-temp").innerHTML =
    Math.round(`${response.data.daily[6].temp.max}`) +
    "˚ | " +
    Math.round(`${response.data.daily[6].temp.min}`) +
    "˚";

  let sixthDayIcon = document.querySelector("#sixth-day-icon");
  sixthDayIcon.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.daily[6].weather[0].icon}@2x.png`
  );
  sixthDayIcon.setAttribute(
    "alt",
    `${response.data.daily[6].weather[0].description}`
  );
}

/*
    document.querySelector(
      "h1"
      ).innerHTML = `${response.data.name}, ${response.data.sys.country}`;
  */

function loadPage(cityName) {
  let apiKey = "4cea025489823b86da62835c695c95d3";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(displayCityInfo);
}

function searchCity(event) {
  event.preventDefault();

  let cityName = document.querySelector("#city-input").value;

  loadPage(cityName);
}

let buttonSearch = document.querySelector("#search-button");
buttonSearch.addEventListener("submit", searchCity);

// Change the C to F links and show different temperatures
function showTempCelsius(event) {
  event.preventDefault();
  document.querySelector("#crnt-tempt").innerHTML = "19˚";
}

function showTempFahrenheit(event) {
  event.preventDefault();
  document.querySelector("#crnt-tempt").innerHTML = "66˚";
}

let clickCelsius = document.querySelector("#temperature-celsius");
clickCelsius.addEventListener("click", showTempCelsius);

let clickFahrenheit = document.querySelector("#temperature-fahrenheit");
clickFahrenheit.addEventListener("click", showTempFahrenheit);

// Make Current City button to show current city & temperature of user

function getCurrentLocation(response) {
  let latitude = response.coords.latitude;
  let longitude = response.coords.longitude;
  let apiKey = "87ea285fd528486819f9be1f3ac61b1d";
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&units=metric&appid=${apiKey}`;

  axios.get(apiUrl).then(displayCityInfo);
}

// Handling button Current City
function handleCurrentButton(event) {
  event.preventDefault();

  navigator.geolocation.getCurrentPosition(getCurrentLocation);
}

let buttonCurrentCity = document.querySelector("#current-button");
buttonCurrentCity.addEventListener("click", handleCurrentButton);

loadPage("New York");
