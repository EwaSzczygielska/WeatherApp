'use strict';

function currentWeather(data) {

    var tempVal = document.querySelector('#temp-val');
    var sky = document.querySelector('#sky');
    var infoList = document.querySelector('#info-list');

    var temperature = data.main.temp;
    var description = data.weather[0].description;
    var pressure = data.main.pressure;
    var humidity = data.main.humidity;
    windSpeed = Math.round(data.wind.speed * 3.6);

    var feelsLike = Math.round(13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16));
    tempVal.textContent = Math.round(temperature);
    sky.textContent = description;
    infoList.innerHTML = '\n    <div class="row">\n        <li class="col-sm-3">Feels Like  <span id="feel-temp-value">' + feelsLike + '</span><span id="feel-temp-unit">\xB0C</span></li>          \n        <li class="col-sm-3">Pressure  ' + pressure + ' hPa</li>\n    </div>\n    <div class="row">\n        <li class="col-sm-3">Humidity  ' + humidity + '%</li>\n        <li class="col-sm-3">Wind  <span id="wind-value">' + windSpeed + '</span> <span id="wind-unit">km/h</span></li>    \n    </div> \n    ';

    windSpeedValue = document.querySelector('#wind-value');
    windSpeedUnit = document.querySelector('#wind-unit');
    tempFeelsLikeValue = document.querySelector('#feel-temp-value');
    tempFeelsLikeUnit = document.querySelector('#feel-temp-unit');
}

//Changing units
var tempVal = document.querySelector('#temp-val');
var tempUnit = document.querySelector('#temp-unit');
var tempUnitChange = document.querySelector('#temp-unit-change');
var tempFeelsLikeValue;
var tempFeelsLikeUnit;
var windSpeedValue;
var windSpeedUnit;

tempUnitChange.addEventListener('click', function () {

    var temp = 1 * tempVal.textContent;
    var unit = tempUnit.textContent;
    var unitAlt = tempUnitChange.textContent;
    var feelTemp = tempFeelsLikeValue.textContent;
    var windSpeed = windSpeedValue.textContent;

    if (unit === "°C") {
        temp = Math.round(temp * 9 / 5 + 32);
        feelTemp = Math.round(feelTemp * 9 / 5 + 32);
        windSpeed = Math.round(windSpeed / 1.609344);
        windSpeedUnit.textContent = "mph";
    } else {
        temp = Math.round((temp - 32) * 5 / 9);
        feelTemp = Math.round((feelTemp - 32) * 5 / 9);
        windSpeed = Math.round(1.609344 * windSpeed);
        windSpeedUnit.textContent = "km/h";
    }
    tempVal.textContent = temp;
    tempUnit.textContent = unitAlt;
    tempUnitChange.textContent = unit;
    tempFeelsLikeValue.textContent = feelTemp;
    tempFeelsLikeUnit.textContent = unitAlt;
    windSpeedValue.textContent = windSpeed;
});