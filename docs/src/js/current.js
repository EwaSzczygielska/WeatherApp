//---Paste to destination .js ---  
//import currentWeather from 'current'

export default function currentWeather(data){
    //var appID = "0e3713180683cf2f0424d6d8a2c2ebe2";

    var tempVal = $('#temp-val');
    var tempUnit = $('#temp-unit');
    var tempUnitChange = $('#temp-unit-change');
    var sky = $('#sky');
    var infoList = $('info-list');
    var iconCode;

    tempVal.textContent = data.main.temp;
    sky.textContent = data.weather[0].description;
    iconCode = data.weather[0].icon;
    infoList.innerHTML =
     `
        <li>Feels Like ${data.main.temp}°C</li>          
        <li>Pressure ${data.main.pressure} hPa</li>
        <li>Humidity ${data.main.humidity}%</li>
        <li>Wind ${data.wind.speed} m/s</li>    
        <li>Wind direction ${data.wind.deg}°</li>
    `;

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

city = "wroclaw";
$.ajax({
            url: "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=fc68321f36609fbd9dcd3f318740aa8a",
            type: "GET",
            dataType: "jsonp",
            success: function (data) {
                currentWeather(data);
            }
        });