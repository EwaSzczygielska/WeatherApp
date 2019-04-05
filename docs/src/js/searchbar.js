var city;
var curcity;
var dayscity;
var mapcity;

$(document).ready(function () {

    city="wroclaw";
                $.ajax({
                url: "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=fc68321f36609fbd9dcd3f318740aa8a",
                type: "GET",
                dataType: "jsonp",
                success:function(data){
                    curcity=data;
                    currentWeather(city);
                }
            });
              $.ajax({
                  url: "http://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=fc68321f36609fbd9dcd3f318740aa8a",
                  type: "GET",
                  dataType: "jsonp",
                  success: function (data) {
                      dayscity = data;
                  }
              });


    $('#submitCity').click(function () {

        var city1 = $('#city').val();
        
        if (city1 != '') {
            $.ajax({
                url: "http://api.openweathermap.org/data/2.5/weather?q=" + city1 + "&appid=fc68321f36609fbd9dcd3f318740aa8a",
                type: "GET",
                dataType: "jsonp",
                success:function(data){
                    city=city1;
                    curcity=data;
                    console.log(city);
                    console.log(curcity);
                    currentWeather(city);
                    $("#error").html('');
                },
                error:function(data)
                {
                    $("#error").html('Wrong name of city');
                    console.log(city);
                    console.log(curcity);
                }
            });

              $.ajax({
                  url: "http://api.openweathermap.org/data/2.5/forecast?q=" + city1 + "&appid=fc68321f36609fbd9dcd3f318740aa8a",
                  type: "GET",
                  dataType: "jsonp",
                  success: function (data) {
                      dayscity = data;
                      console.log(dayscity);
                  },
                  error:function(data)
                  {
                      console.log(dayscity);
                  }
              });

        } else {
            $("#error").html('Wrong name of city');
            console.log(city);
            console.log(curcity);
            console.log(dayscity);
        }
    })

    $('#sprawdzenie').click(function () {
            console.log(city);
            console.log(curcity);
            console.log(dayscity);
    });
})

//export {city};
