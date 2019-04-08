function diagrams(data){
    let temperatureChart = document.getElementById('temperatureChart').getContext('2d');
    let pressureChart = document.getElementById('pressureChart').getContext('2d');
    let humidityChart = document.getElementById('humidityChart').getContext('2d');

    let city = data.name;
    let appID = '7c9de8a35240ee230d96115961a7e4cb';
    let units = 'metric'
    let day;
    let dates;
    var oneDay = 86400;
    datesTable=[];
    datesValues=[];

    var url = (`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=${units}&APPID=${appID}`);
    fetch(url)
        .then(resp => resp.json())
        .then(data1 => {
            console.log(data1);
            dates = data1.list;
            //console.log(dates);
            //day = data1.list[0].dt;
            for (var i=0; i<dates.length; i=i+2) {
                var currDate = dates[i];
                console.log(currDate.main.temp);
                datesValues.push(currDate.main.temp);
                datesTable.push(currDate.dt_txt);
            }
            console.log(datesTable);
            console.log(datesValues);
        });

    let lineTemperatureChart = new Chart(temperatureChart, {
        type: 'line',
        data:{
            labels:datesTable,
            datasets:[{
                label:'Temperature',
                data:datesValues
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
}