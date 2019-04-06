function fiveDays(data) {
    let city = data.name;
    console.log(city);
    let appID = 'ed35929be75cc2d35d7f745115549c49';
    let units = 'metric'
    let day;
    var weekDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var data;
    var datax;
    var datay;
    var oneDay = 86400;
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
    var skycons = new Skycons({
        "color": "black"
    });

    let dayofweek = document.querySelectorAll('.dayofweek');
    let date = document.querySelectorAll('.date');
    let maximumtemp = document.querySelectorAll('.max-temp');
    let minimumtemp = document.querySelectorAll('.min-temp');
    let humidity = document.querySelectorAll('.humidity');
    let iconx = document.querySelectorAll('.icon');

    //const fetch = require('node-fetch');
    var url = (`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=${units}&APPID=${appID}`);
    fetch(url)
        .then(resp => resp.json())
        .then(data1 => {
            day = data1.list[0].dt;
            for (i = 0; i < 5; i++) {
                day = day + oneDay;
                newDate = new Date(day * 1000);
                dayofweek[i].innerHTML = weekDay[newDate.getDay()];
                datax = newDate.getDate();
                datay = months[newDate.getMonth()];
                date[i].innerHTML = `${datax} ${datay}`;
                console.log(weekDay[newDate.getDay()], newDate.getDate(), months[newDate.getMonth()]);
                newDate1 = new Date(`${newDate.getFullYear()}-${newDate.getMonth()}-${newDate.getDate()}`);
                newDate1 = newDate1.getTime();
                n = n + 5;
                hum = 0;
                tempMax = -100;
                tempMin = 100;
                weatharray = [0, 0, 0, 0, 0, 0, 0];
                for (j = n; j < (n + 8); j++) {
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
                    } else if (data1.list[j].weather[0].id == 801) {
                        weatharray[5]++;
                    } else {
                        weatharray[6]++;
                    }
                };
                maxarray = Math.max.apply(null, weatharray);
                switch (maxarray) {
                    case weatharray[0]:
                        k = "THUNDER";
                        console.log(k);
                        break;
                    case weatharray[1]:
                        k = "RAIN";
                        console.log(k);
                        break;
                    case weatharray[2]:
                        k = "SNOW";
                        console.log(k);
                        break;
                    case weatharray[3]:
                        k = "FOG";
                        console.log(k);
                        break;
                    case weatharray[4]:
                        k = "CLEAR_DAY";
                        console.log(k);
                        break;
                    case weatharray[5]:
                        k = "PARTLY_CLOUDY_DAY";
                        console.log(k);
                        break;
                    case weatharray[6]:
                        k = "CLOUDY";
                        console.log(k);
                        break;
                }
                tempMax = Math.round(tempMax * 10) / 10;
                tempMin = Math.round(tempMin * 10) / 10;
                hum = Math.round(hum / 8);
                maximumtemp[i].innerHTML = `${tempMax}&deg C`;
                minimumtemp[i].innerHTML = `${tempMin}&deg C`;
                humidity[i].innerHTML = `${hum}%`;

                function iconplay(k) {
                    skycons.add(iconx[i], Skycons[k]);
                    skycons.play();
                }
                iconplay(k);
            }

        });
}