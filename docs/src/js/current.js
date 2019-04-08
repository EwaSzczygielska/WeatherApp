function currentWeather(data){
    
    var tempVal = document.querySelector('#temp-val');
    var sky = document.querySelector('#sky');
    var infoList = document.querySelector('#info-list');
    var photo = document.querySelector('.photo');

    let temperature = data.main.temp;
    let description = data.weather[0].description;
    let pressure = data.main.pressure;
    let humidity = data.main.humidity;
    windSpeed = Math.round(data.wind.speed * 3.6);
    let weatherID = data.weather[0].id;

    let feelsLike = Math.round(13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16));
    
    let descrArray = description.split(" ");
    for (var i=0; i<descrArray.length; i++){
        descrArray[i] = descrArray[i][0].toUpperCase() + descrArray[i].slice(1,descrArray[i].length);
    }
    description = descrArray.join(" ");
    
    tempVal.textContent = Math.round(temperature);
    sky.textContent = description;
    infoList.innerHTML =
    `
    <div class="row">
        <li class="col-sm-6 col-md-3 col-xl-2 "><span style="color:var(--sec-font-color);">Feels Like</span> &nbsp<span id="feel-temp-value">${feelsLike}</span><span id="feel-temp-unit">°C</span></li>          
        <li class="col-sm-6 col-md-4 col-xl-3"><span style="color:var(--sec-font-color);">Pressure</span> &nbsp${pressure}&nbsphPa</li>
    </div>
    <div class="row">
        <li class="col-sm-6 col-md-3 col-xl-2"><span style="color:var(--sec-font-color);">Humidity</span> &nbsp${humidity}%</li>
        <li class="col-sm-6 col-md-4 col-xl-3"><span style="color:var(--sec-font-color);">Wind</span> &nbsp<span id="wind-value">${windSpeed}</span>&nbsp<span id="wind-unit">km/h</span></li>    
    </div> 
    `;

    windSpeedValue = document.querySelector('#wind-value');
    windSpeedUnit = document.querySelector('#wind-unit');
    tempFeelsLikeValue = document.querySelector('#feel-temp-value');
    tempFeelsLikeUnit = document.querySelector('#feel-temp-unit');


    //setting background image
    if (weatherID >= 200 && weatherID < 300){
        //thunder
        photo.style.backgroundImage = "url(./src/img/thunder.jpg)";
    } else if (weatherID >= 300 && weatherID < 400){
        //drizzle
        photo.style.backgroundImage = "url(./src/img/rain.jpg)";
    } else if (weatherID >= 500 && weatherID < 600){
        //rain
        photo.style.backgroundImage = "url(./src/img/rain.jpg)";
    } else if (weatherID >= 600 && weatherID < 700){
        //snow
        photo.style.backgroundImage = "url(./src/img/snow.jpg)";
    } else if (weatherID >= 700 && weatherID < 800){
        //fog etc.
        photo.style.backgroundImage = "url(./src/img/fog.jpg)";
    } else if (weatherID == 800){
        //clear sky
        photo.style.backgroundImage = "url(./src/img/clearsky.jpg)";
    } else if (weatherID == 801) {
        //partly cloud
        photo.style.backgroundImage = "url(./src/img/partlycloud.jpg)";
    } else if (weatherID > 801 && weatherID < 810){
        //clouds
        photo.style.backgroundImage = "url(./src/img/cloud.jpg)";
    }
}


//Changing units
var tempVal = document.querySelector('#temp-val');
var tempUnit = document.querySelector('#temp-unit');
var tempUnitChange = document.querySelector('#temp-unit-change');
var tempFeelsLikeValue;
var tempFeelsLikeUnit;
var windSpeedValue;
var windSpeedUnit;

tempUnitChange.addEventListener('click', function(){

    var temp = 1*tempVal.textContent;
    var unit = tempUnit.textContent;
    var unitAlt = tempUnitChange.textContent;
    var feelTemp = tempFeelsLikeValue.textContent;
    var windSpeed = windSpeedValue.textContent;
    

    if (unit === "°C"){
        temp = Math.round(temp * 9 / 5 + 32);
        feelTemp = Math.round(feelTemp * 9 / 5 + 32);
        windSpeed = Math.round(windSpeed / 1.609344);
        windSpeedUnit.textContent = "mph";
    } else{
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