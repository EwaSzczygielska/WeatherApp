console.log(curcity);
console.log(city);

currentWeather();
$('#submitCity').click(currentWeather)

function currentWeather(){
    var appID = "0e3713180683cf2f0424d6d8a2c2ebe2";
    let currentCity = city;
    let units = 'metric'

    var tempVal = document.querySelector('#temp-val');
    var tempUnit = document.querySelector('#temp-unit');
    var tempUnitChange = document.querySelector('#temp-unit-change');
    var sky = document.querySelector('#sky');
    var infoList = document.querySelector('#info-list');
    var iconCode;

    var url = (`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&APPID=${appID}`);
    fetch(url)
       .then(resp => resp.json())
        .then(data => {
            tempVal.textContent = Math.round(data.main.temp);
            sky.textContent = data.weather[0].description;
            iconCode = data.weather[0].icon;
            infoList.innerHTML =
            `
            <div class="row">
                <li class="col-sm-3">Feels Like ${Math.round(data.main.temp)}°C</li>          
                <li class="col-sm-3">Pressure ${data.main.pressure} hPa</li>
            </div>
            <div class="row">
                <li class="col-sm-3">Humidity ${data.main.humidity}%</li>
                <li class="col-sm-3">Wind ${data.wind.speed} m/s</li>    
            </div> 
            `;
        });

//<li class="col-sm">Wind direction ${data.wind.deg}°</li>
   
//Changing unit
    tempUnitChange.click(fun  => {
        var temp = 1*tempVal.textContent;
        var unit = tempUnit.textContent;
        var unitAlt = tempUnitChange.textContent;

        if (unit === "°C"){
            temp = temp * 9 / 5 + 32;
        } else{
            temp = (temp - 32) * 5 / 9;
        }
        
        tempVal.textContent = temp;
        tempUnit.textContent = unitAlt;
        tempUnitChange.textContent = unit;
    });   
}

