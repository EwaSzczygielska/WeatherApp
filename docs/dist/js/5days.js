'use strict';

//http://api.openweathermap.org/data/2.5/forecast?q=London&APPID=ed35929be75cc2d35d7f745115549c49
//import {city} from './searchbar.js';
var city = 'wroclaw';
var appID = 'ed35929be75cc2d35d7f745115549c49';
var units = 'metric';
var day = void 0;
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

var dayofweek = document.querySelectorAll('.dayofweek');
var date = document.querySelectorAll('.date');
var maximumtemp = document.querySelectorAll('.max-temp');
var minimumtemp = document.querySelectorAll('.min-temp');
var humidity = document.querySelectorAll('.humidity');

//const fetch = require('node-fetch');
var url = 'https://api.openweathermap.org/data/2.5/forecast?q=' + city + '&units=' + units + '&APPID=' + appID;
fetch(url).then(function (resp) {
    return resp.json();
}).then(function (data) {
    console.log(data);
    day = data.list[0].dt;
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
        hum = 0;
        tempMax = -100;
        tempMin = 100;
        for (j = n; j < n + 8; j++) {
            if (data.list[j].main.temp_max > tempMax) {
                tempMax = data.list[j].main.temp_max;
            };
            if (data.list[j].main.temp_min < tempMin) {
                tempMin = data.list[j].main.temp_min;
            };
            hum = hum + data.list[j].main.humidity;
        }
        tempMax = Math.round(tempMax * 10) / 10;
        tempMin = Math.round(tempMin * 10) / 10;
        hum = Math.round(hum / 8);
        maximumtemp[i].innerHTML = tempMax + '&deg C';
        minimumtemp[i].innerHTML = tempMin + '&deg C';
        humidity[i].innerHTML = hum + '%';
    }
});