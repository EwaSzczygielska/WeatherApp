'use strict';

function diagrams(data) {
    Chart.defaults.global.defaultFontColor = 'white';
    Chart.defaults.global.defaultFontSize = 14;
    var temperatureChart = document.getElementById('temperatureChart').getContext('2d');
    var pressureChart = document.getElementById('pressureChart').getContext('2d');
    var humidityChart = document.getElementById('humidityChart').getContext('2d');
    var city = data.name;
    var appID = '7c9de8a35240ee230d96115961a7e4cb';
    var units = 'metric';
    var day = void 0;
    var dates;
    var oneDay = 86400;
    datesTable = [];
    temperatureValues = [];
    pressureValues = [];
    humidityValues = [];

    var url = 'https://api.openweathermap.org/data/2.5/forecast?q=' + city + '&units=' + units + '&APPID=' + appID;
    fetch(url).then(function (resp) {
        return resp.json();
    }).then(function (data1) {
        dates = data1.list;
        for (var i = 0; i < dates.length; i = i + 3) {
            var currDate = dates[i];
            temperatureValues.push(currDate.main.temp);
            pressureValues.push(currDate.main.pressure);
            humidityValues.push(currDate.main.humidity);
            datesTable.push(currDate.dt_txt.substring(0, 16));
        }
    });

    var lineTemperatureChart = new Chart(temperatureChart, {
        type: 'line',
        data: {
            labels: datesTable,
            datasets: [{
                label: 'Temperature',
                data: temperatureValues,
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                borderWidth: 2,
                borderColor: 'white'

            }]
        },
        legend: {
            fontFamily: "Dosis"
        },
        options: {}
    });

    setTimeout(function () {
        lineTemperatureChart.update();
    }, 1000);

    var linePressureChart = new Chart(pressureChart, {
        type: 'line',
        data: {
            labels: datesTable,
            datasets: [{
                label: 'Preassure',
                data: pressureValues,
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                borderWidth: 2,
                borderColor: 'white'
            }]
        },
        legend: {
            fontFamily: "Dosis"
        },
        options: {}
    });
    setTimeout(function () {
        linePressureChart.update();
    }, 500);
    var lineHumidityChart = new Chart(humidityChart, {
        type: 'line',
        data: {
            labels: datesTable,
            datasets: [{
                label: 'Humidity',
                data: humidityValues,
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                borderWidth: 2,
                borderColor: 'white'
            }]
        },
        legend: {
            fontFamily: "Dosis"
        },
        options: {}
    });
    setTimeout(function () {
        lineHumidityChart.update();
    }, 500);
}