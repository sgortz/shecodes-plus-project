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

let smallHeading = document.querySelector("#day-hour");
smallHeading.innerHTML = `${weekday}, ${month} ${dateMonth}, ${hour}:${minutes} pm`;

// Phase 2 - Show the name of the city typed in the forms

function searchInputValue(event) {
  event.preventDefault();
  let showCity = document.querySelector("#city-input");
  let cityName = showCity.value;
  let apiKey = "4cea025489823b86da62835c695c95d3";
  let apiUnit = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=${apiUnit}`;

  axios.get(apiUrl).then(function (response) {
    let h1 = document.querySelector("h1");
    h1.innerHTML = `${response.data.name}, ${response.data.sys.country}`;
    let currentTemp = document.querySelector("#crnt-tempt");
    let shortCurrentTemp = Math.round(response.data.main.temp);
    currentTemp.innerHTML = `${shortCurrentTemp}˚`;
  });
}

let buttonSearch = document.querySelector("#button-search");
buttonSearch.addEventListener("click", searchInputValue);

// Phase 3 - Change the C to F links and show different temperatures
function showTempCelsius(event) {
  event.preventDefault();

  let tempCelsius2 = document.querySelector("#crnt-tempt");
  tempCelsius2.innerHTML = "19˚";
}

function showTempFahrenheit(event) {
  event.preventDefault();
  let tempFahrenheit2 = document.querySelector("#crnt-tempt");
  tempFahrenheit2.innerHTML = "66˚";
}

let clickCelsius = document.querySelector("#temperature-celsius");
clickCelsius.addEventListener("click", showTempCelsius);

let clickFahrenheit = document.querySelector("#temperature-fahrenheit");
clickFahrenheit.addEventListener("click", showTempFahrenheit);

// Make Current City button to show current city & temperature of user
function showCurrentPosition(event) {
  event.preventDefault();

  navigator.geolocation.getCurrentPosition(function (response) {
    let latitude = response.coords.latitude;
    let longitude = response.coords.longitude;
    let apiKey = "4cea025489823b86da62835c695c95d3";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`;

    axios.get(apiUrl).then(function (response) {
      //console.log(response);
      let h1 = document.querySelector("h1");
      h1.innerHTML = `${response.data.name}, ${response.data.sys.country}`;
      let currentTemperature = document.querySelector("#crnt-tempt");
      let shortCurrentTemperature = Math.round(response.data.main.temp);
      currentTemperature.innerHTML = `${shortCurrentTemperature}˚`;
    });
  });
}

let buttonCurrentCity = document.querySelector("#button-current");
buttonCurrentCity.addEventListener("click", showCurrentPosition);
