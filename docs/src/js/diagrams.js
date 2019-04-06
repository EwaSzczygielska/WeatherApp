let temperatureChart = document.getElementById('temperatureChart').getContext('2d');
let pressureChart = document.getElementById('pressureChart').getContext('2d');
let humidityChart = document.getElementById('humidityChart').getContext('2d');


let lineTemperatureChart = new Chart(temperatureChart, {
    type: 'bar',
    data:{
        labels:['day1','day2','day3'],
        datasets:[{
            label:'Temperature',
            data:[24, 58, 109]
        }],
    },
    options:{}
});


let linePressureChart = new Chart(pressureChart, {
    type: 'bar',
    data:{
        labels:['day1','day2','day3'],
        datasets:[{
            label:'Temperature',
            data:[24, 58, 109]
        }],
    },
    options:{}
});

let lineHumidityChart = new Chart(humidityChart, {
    type: 'bar',
    data:{
        labels:['day1','day2','day3'],
        datasets:[{
            label:'Temperature',
            data:[24, 58, 109]
        }],
    },
    options:{}
});
