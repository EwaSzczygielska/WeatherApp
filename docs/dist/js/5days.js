'use strict';

function fiveDays(data) {
    var city = data.name;
    console.log(city);
    var appID = 'ed35929be75cc2d35d7f745115549c49';
    var units = 'metric';
    var day = void 0;
    var weekDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var weather;
    var data;
    var data1;
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
    var k;
    var n = -5;
    var weatharray;
    var maxarray;

    var dayofweek = document.querySelectorAll('.dayofweek');
    var date = document.querySelectorAll('.date');
    var maximumtemp = document.querySelectorAll('.max-temp');
    var minimumtemp = document.querySelectorAll('.min-temp');
    var humidity = document.querySelectorAll('.humidity');
    var weatherIcon = document.querySelector('.weather-icon');

    var thunder = document.querySelector('.thunder-cloud');
    var rain = document.querySelector('.rain-cloud');
    var snow = document.querySelector('.snow-cloud');
    var halfsun = document.querySelector('.sun-cloud');
    var sun = document.querySelector('.sunshine');
    var cloud = document.querySelector('.windy-cloud');

    //const fetch = require('node-fetch');
    var url = 'https://api.openweathermap.org/data/2.5/forecast?q=' + city + '&units=' + units + '&APPID=' + appID;
    fetch(url).then(function (resp) {
        return resp.json();
    }).then(function (data1) {
        console.log(data1);
        day = data1.list[0].dt;
        for (i = 0; i < 5; i++) {
            day = day + oneDay;
            console.log(day);
            newDate = new Date(day * 1000);
            dayofweek[i].innerHTML = weekDay[newDate.getDay()];
            datax = newDate.getDate();
            datay = months[newDate.getMonth()];
            date[i].innerHTML = datax + ' ' + datay;
            console.log(weekDay[newDate.getDay()], newDate.getDate(), months[newDate.getMonth()]);
            newDate1 = new Date(newDate.getFullYear() + '-' + newDate.getMonth() + '-' + newDate.getDate());
            newDate1 = newDate1.getTime();
            n = n + 5;
            /*for (k = 0; k < 8; k++) {
                if (newDate1 != data.list[k].dt * 1000) {
                    n++;
                }
            }*/
            console.log(n);
            hum = 0;
            tempMax = -100;
            tempMin = 100;
            weatharray = [0, 0, 0, 0, 0, 0];
            for (j = n; j < n + 8; j++) {
                if (data1.list[j].main.temp_max > tempMax) {
                    tempMax = data1.list[j].main.temp_max;
                };
                if (data1.list[j].main.temp_min < tempMin) {
                    tempMin = data1.list[j].main.temp_min;
                };
                hum = hum + data1.list[j].main.humidity;
                console.log(data1.list[j].weather[0].id);
                if (data1.list[j].weather[0].id > 199 && data1.list[j].weather[0].id < 233) {
                    weatharray[0]++;
                } else if (data1.list[j].weather[0].id > 299 && data1.list[j].weather[0].id < 532) {
                    weatharray[1]++;
                } else if (data1.list[j].weather[0].id > 599 && data1.list[j].weather[0].id < 623) {
                    weatharray[2]++;
                } else if (data1.list[j].weather[0].id > 699 && data1.list[j].weather[0].id < 782) {
                    weatharray[3]++;
                } else if (data1.list[j].weather[0].id == 800) {
                    weatharray[4]++;
                } else {
                    weatharray[5]++;
                }
            }
            console.log(weatharray);
            maxarray = Math.max.apply(null, weatharray);
            switch (maxarray) {
                case weatharray[0]:
                    weatherIcon[i] = "thunder1";
                    console.log(weatherIcon[i]);
                    break;
                case weatharray[1]:
                    weatherIcon[i] = "thunder2";
                    console.log(weatherIcon[i]);
                    break;
                case weatharray[2]:
                    weatherIcon[i] = "thunder3";
                    console.log(weatherIcon[i]);
                    break;
                case weatharray[3]:
                    weatherIcon[i] = "thunder4";
                    console.log(weatherIcon[i]);
                    break;
                case weatharray[4]:
                    weatherIcon[i] = "thunder5";
                    console.log(weatherIcon[i]);
                    break;
                case weatharray[5]:
                    weatherIcon[i] = "thunder6";
                    console.log(weatherIcon[i]);
                    break;
            }

            tempMax = Math.round(tempMax * 10) / 10;
            tempMin = Math.round(tempMin * 10) / 10;
            hum = Math.round(hum / 8);
            maximumtemp[i].innerHTML = tempMax + '&deg C';
            minimumtemp[i].innerHTML = tempMin + '&deg C';
            humidity[i].innerHTML = hum + '%';
        }
    });
}

fiveDays();