"use strict";

var city;
var curcity;
var dayscity;
var mapcity;
var units = 'metric';

$(document).ready(function () {

    city = "wroclaw";
    $.ajax({
        url: "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=" + units + "&appid=fc68321f36609fbd9dcd3f318740aa8a",
        type: "GET",
        dataType: "jsonp",
        success: function success(data) {
            currentWeather(data);
            fiveDays(data);
            $("#error").html('');
            $("#nameofcity").html('Wrocław');
        }
    });
    $.ajax({
        url: "http://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=" + units + "&appid=fc68321f36609fbd9dcd3f318740aa8a",
        type: "GET",
        dataType: "jsonp",
        success: function success(data) {
            dayscity = data;
        }
    });

    $('#submitCity').click(function () {

        var city1 = $('#city').val();

        if (city1 != '') {
            $.ajax({
                url: "http://api.openweathermap.org/data/2.5/weather?q=" + city1 + "&units=" + units + "&appid=fc68321f36609fbd9dcd3f318740aa8a",
                type: "GET",
                dataType: "jsonp",
                success: function success(data) {
                    city = city1;
                    console.log(city);
                    console.log(curcity);
                    currentWeather(data);
                    fiveDays(data);
                    $("#error").html('');
                    $("#nameofcity").html(city);
                },
                error: function error(data) {
                    $("#error").html('Wrong name of city');
                    console.log(city);
                    console.log(curcity);
                }
            });

            $.ajax({
                url: "http://api.openweathermap.org/data/2.5/forecast?q=" + city1 + "&units=" + units + "&appid=fc68321f36609fbd9dcd3f318740aa8a",
                type: "GET",
                dataType: "jsonp",
                success: function success(data) {
                    dayscity = data;
                    console.log(dayscity);
                },
                error: function error(data) {
                    console.log(dayscity);
                }
            });
        } else {
            $("#error").html('Wrong name of city');
            console.log(city);
            console.log(curcity);
            console.log(dayscity);
        }
    });

    $('#sprawdzenie').click(function () {
        console.log(city);
        console.log(curcity);
        console.log(dayscity);
    });
});