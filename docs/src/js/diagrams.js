function diagrams(data){
    Chart.defaults.global.defaultFontColor='white';
    let temperatureChart = document.getElementById('temperatureChart').getContext('2d');
    let pressureChart = document.getElementById('pressureChart').getContext('2d');
    let humidityChart = document.getElementById('humidityChart').getContext('2d');
    let city = data.name;
    let appID = '7c9de8a35240ee230d96115961a7e4cb';
    let units = 'metric'
    let day;
    var dates;
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
            console.log(temperatureValues);
            dates = data1.list;
            //console.log(dates);
            for (var i=0; i<dates.length; i=i+3) {
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
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                borderWidth: 2,
                borderColor: 'white'

            }],
        },
        legend:{
            fontFamily: "Dosis",
           },
        options:{}
    });

    function addData(){
        //lineTemperatureChart.data.datasets[0].data = temperatureValues; 
        console.log(lineTemperatureChart.data.datasets[1]);
        lineTemperatureChart.update();
    }
    addData();

   let linePressureChart = new Chart(pressureChart, {
        type: 'line',
        data:{
            labels:datesTable,
            datasets:[{
                label:'Preassure',
                data:pressureValues,
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                borderWidth: 2,
                borderColor: 'white'
            }],
        },
        legend:{
            fontFamily: "Dosis",
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
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                borderWidth: 2,
                borderColor: 'white'
            }],
        },
        legend:{
            fontFamily: "Dosis",
           },
        options:{}
    });
}