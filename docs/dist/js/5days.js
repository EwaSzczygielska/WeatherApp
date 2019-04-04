'use strict';

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
var city = "wroclaw";
var appID = 'ed35929be75cc2d35d7f745115549c49';
var day = 'numeric';
var weekDay = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var weather;
var data;
var newDay = 86400;
var i = 0;

//const fetch = require('node-fetch');
var url = 'https://api.openweathermap.org/data/2.5/forecast?q=' + city + '&units=metric&APPID=' + appID;
fetch(url).then(function (resp) {
    return resp.json();
}).then(function (data) {
    console.log(data);
    console.log(data.city.country);
    day = data.list[0].dt;
    for (i = 0; i < 5; i++) {
        day = day + newDay;
        console.log(day);
        var newDate = new Date(day * 1000);
        console.log(newDate.getDate());
        console.log(months[newDate.getMonth()]);
        console.log(weekDay[newDate.getDay()]);
    }
});