function diagrams(data){
    let temperatureChart = document.getElementById('temperatureChart').getContext('2d');
    let pressureChart = document.getElementById('pressureChart').getContext('2d');
    let humidityChart = document.getElementById('humidityChart').getContext('2d');
    //temperatureChart.parentNode.parentNode.style.width="90px";
    let city = data.name;
    let appID = '7c9de8a35240ee230d96115961a7e4cb';
    let units = 'metric'
    let day;
    let dates;
    var oneDay = 86400;
    datesTable=[];
    temperatureValues=[];
    pressureValues=[];
    humidityValues=[];


    var url = (`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=${units}&APPID=${appID}`);
    fetch(url)
        .then(resp => resp.json())
        .then(data1 => {
            console.log(data1);
            dates = data1.list;
            //console.log(dates);
            for (var i=0; i<dates.length; i=i+2) {
                var currDate = dates[i];
                //console.log(currDate.main.temp);
                temperatureValues.push(currDate.main.temp);
                pressureValues.push(currDate.main.pressure);
                humidityValues.push(currDate.main.humidity);
                datesTable.push(currDate.dt_txt.substring(0, 16));
            }
            //console.log(datesTable);
            //console.log(temperatureValues);
            //console.log(pressureValues);
            //console.log(humidityValues);
        });

    let lineTemperatureChart = new Chart(temperatureChart, {
        type: 'line',
        data:{
            labels:datesTable,
            datasets:[{
                label:'Temperature',
                data:temperatureValues,
                backgroundColor: 'rgba(0, 0, 60, 0.5)'

            }],
        },
        options:{}
    });

   let linePressureChart = new Chart(pressureChart, {
        type: 'line',
        data:{
            labels:datesTable,
            datasets:[{
                label:'Preassure',
                data:pressureValues,
                backgroundColor: 'rgba(0, 0, 60, 0.5)'
            }],
        },
        options:{}
    });

    let lineHumidityChart = new Chart(humidityChart, {
        type: 'line',
        data:{
            labels:datesTable,
            datasets:[{
                label:'Humidity',
                data:humidityValues,
                backgroundColor: 'rgba(0, 0, 60, 0.5)'
            }],
        },
        options:{}
    });
}