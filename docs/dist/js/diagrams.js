'use strict';

var temperatureChart = document.getElementById('temperatureChart').getContext('2d');
var pressureChart = document.getElementById('pressureChart').getContext('2d');
var humidityChart = document.getElementById('humidityChart').getContext('2d');

var lineTemperatureChart = new Chart(temperatureChart, {
    type: 'bar',
    data: {
        labels: ['day1', 'day2', 'day3'],
        datasets: [{
            label: 'Temperature',
            data: [24, 58, 109]
        }]
    },
    options: {}
});

var linePressureChart = new Chart(pressureChart, {
    type: 'bar',
    data: {
        labels: ['day1', 'day2', 'day3'],
        datasets: [{
            label: 'Temperature',
            data: [24, 58, 109]
        }]
    },
    options: {}
});

var lineHumidityChart = new Chart(humidityChart, {
    type: 'bar',
    data: {
        labels: ['day1', 'day2', 'day3'],
        datasets: [{
            label: 'Temperature',
            data: [24, 58, 109]
        }]
    },
    options: {}
});