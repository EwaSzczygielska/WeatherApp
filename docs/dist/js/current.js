'use strict';

function currentWeather(data) {

    var tempVal = document.querySelector('#temp-val');
    var sky = document.querySelector('#sky');
    var infoList = document.querySelector('#info-list');

    var temperature = data.main.temp;
    var description = data.weather[0].description;
    var pressure = data.main.pressure;
    var humidity = data.main.humidity;
    var windSpeed = data.wind.speed;

    var feelsLike = 0.045 * (Math.pow(5.27, 0.5) + 10.45 - 0.28 * windSpeed) * (temperature - 33) + 33;

    tempVal.textContent = Math.round(temperature);
    sky.textContent = description;
    infoList.innerHTML = '\n    <div class="row">\n        <li class="col-sm-3">Feels Like ' + Math.round(feelsLike) + '\xB0C</li>          \n        <li class="col-sm-3">Pressure ' + pressure + ' hPa</li>\n    </div>\n    <div class="row">\n        <li class="col-sm-3">Humidity ' + humidity + '%</li>\n        <li class="col-sm-3">Wind ' + windSpeed + ' m/s</li>    \n    </div> \n    ';
}

//Changing unit
var tempVal = document.querySelector('#temp-val');
var tempUnit = document.querySelector('#temp-unit');
var tempUnitChange = document.querySelector('#temp-unit-change');

tempUnitChange.addEventListener('click', function () {
    console.log("Changing unit");
    var temp = 1 * tempVal.textContent;
    var unit = tempUnit.textContent;
    var unitAlt = tempUnitChange.textContent;

    if (unit === "°C") {
        temp = temp * 9 / 5 + 32;
    } else {
        temp = (temp - 32) * 5 / 9;
    }

    tempVal.textContent = temp;
    tempUnit.textContent = unitAlt;
    tempUnitChange.textContent = unit;
});