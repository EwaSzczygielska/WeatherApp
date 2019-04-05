function currentWeather(city){
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
            let temperature = data.main.temp;
            let description = data.weather[0].description;
            let pressure = data.main.pressure;
            let humidity = data.main.humidity;
            let windSpeed = data.wind.speed;
            let feelsLike = 0.045 * (Math.pow(5.27, 0.5) + 10.45 - 0.28 * windSpeed) * (temperature - 33) + 33;

            tempVal.textContent = Math.round(temperature);
            sky.textContent = description;
            infoList.innerHTML =
            `
            <div class="row">
                <li class="col-sm-3">Feels Like ${feelsLike}°C</li>          
                <li class="col-sm-3">Pressure ${pressure} hPa</li>
            </div>
            <div class="row">
                <li class="col-sm-3">Humidity ${humidity}%</li>
                <li class="col-sm-3">Wind ${windSpeed} m/s</li>    
            </div> 
            `;
        });
   
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

