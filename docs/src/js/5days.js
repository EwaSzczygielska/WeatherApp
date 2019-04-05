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
let city = "wroclaw";
let appID = 'ed35929be75cc2d35d7f745115549c49';
let day = 'numeric';
var weekDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var weather;
var data;
var datax;
var datay;
var oneDay = 86400;
var threeHours = 10800000;
var newDate;
var newDate1;
var tempMax;
var tempMin;
var hum;
var i;
var j;
var n = -5;

let dayofweek = document.querySelectorAll('.dayofweek');
let date = document.querySelectorAll('.date');
let maximumtemp = document.querySelectorAll('.max-temp');
let minimumtemp = document.querySelectorAll('.min-temp');
let humidity = document.querySelectorAll('.humidity');

//const fetch = require('node-fetch');
var url = (`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&APPID=${appID}`);
fetch(url)
    .then(resp => resp.json())
    .then(data => {
        console.log(data);
        day = data.list[0].dt;
        for (i = 0; i < 5; i++) {
            day = day + oneDay;
            console.log(day);
            newDate = new Date(day * 1000);
            dayofweek[i].innerHTML = weekDay[newDate.getDay()];
            datax = newDate.getDate();
            datay = months[newDate.getMonth()];
            date[i].innerHTML = `${datax} ${datay}`;
            console.log(weekDay[newDate.getDay()], newDate.getDate(), months[newDate.getMonth()])
            newDate1 = new Date(`${newDate.getFullYear()}-${newDate.getMonth()}-${newDate.getDate()}`);
            newDate1 = newDate1.getTime();
            n = n + 5;
            hum=0;
            tempMax = -100;
            tempMin = 100;
            for (j = n; j < (n + 8); j++) {
                if (data.list[j].main.temp_max > tempMax) {
                    tempMax = data.list[j].main.temp_max;
                };
                if (data.list[j].main.temp_min < tempMin) {
                    tempMin = data.list[j].main.temp_min;
                };
                hum = hum + data.list[j].main.humidity;
            }
            tempMax = Math.round(tempMax*10)/10;
            tempMin = Math.round(tempMin*10)/10;
            hum=Math.round(hum/8);
            maximumtemp[i].innerHTML = `${tempMax}&deg C`;
            minimumtemp[i].innerHTML = `${tempMin}&deg C`;
            humidity[i].innerHTML = `${hum}%`;
        }
    });