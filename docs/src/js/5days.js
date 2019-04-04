//http://api.openweathermap.org/data/2.5/forecast?q=London&APPID=ed35929be75cc2d35d7f745115549c49
//list.main.humidity Humidity, %
//list.dt Time of data forecasted, unix, UTC
//list.weather.main Group of weather parameters (Rain, Snow, Extreme etc.)
//list.weather.icon Weather icon id
/*list.main.temp_min Minimum temperature at the moment of calculation. This is deviation from 'temp' that is possible for large cities and megalopolises geographically expanded (use these parameter optionally). Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit.
list.main.temp_max Maximum temperature at the moment of calculation.This is deviation from 'temp'
that is possible
for large cities and megalopolises geographically expanded(use these parameter optionally).Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit.
*/
/* Example of API response JSON:
{
    "city": {
        "id": 1851632,
        "name": "Shuzenji",
        "coord": {
            "lon": 138.933334,
            "lat": 34.966671
        },
        "country": "JP",
        "cod": "200",
        "message": 0.0045,
        "cnt": 38,
        "list": [{
            "dt": 1406106000,
            "main": {
                "temp": 298.77,
                "temp_min": 298.77,
                "temp_max": 298.774,
                "pressure": 1005.93,
                "sea_level": 1018.18,
                "grnd_level": 1005.93,
                "humidity": 87,
                "temp_kf": 0.26
            },
            "weather": [{
                "id": 804,
                "main": "Clouds",
                "description": "overcast clouds",
                "icon": "04d"
            }],
            "clouds": {
                "all": 88
            },
            "wind": {
                "speed": 5.71,
                "deg": 229.501
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2014-07-23 09:00:00"
        }]
    } */
let cityID = 524901;
let appID = 'ed35929be75cc2d35d7f745115549c49';
let units = 'metric';
let day = 'numeric';
let month = 'long';
let year = 'numeric';
let weekday = 'short';
let timezone = 'UTC';
let hour = 'numeric';
let minute = 'numeric';
let second = 'numeric';
var weather;


//const fetch = require('node-fetch');
var url = (`https://api.openweathermap.org/data/2.5/forecast?id=${cityID}&units=metric&APPID=${appID}`);
fetch(url)
    .then(resp => resp.json())
    .then(data => console.log(data));



/*function 5daysforecast() {
    for (let i = 0; i < 5; i++) {
        if (i >= 1) {
            time ++;
        }
    }
}*/