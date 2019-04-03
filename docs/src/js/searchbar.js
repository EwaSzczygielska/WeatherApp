var city;
var curcity;
var dayscity;
var mapcity;

$(document).ready(function () {

    city="wroclaw";

    $.ajax({
                url: "http://api.openweathermap.org/data/2.5/weather?q=wroclaw" + city + "&appid=fc68321f36609fbd9dcd3f318740aa8a",
                type: "GET",
                dataType: "jsonp",
                success:function(data){
                    curcity=data;
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
            city=city1;
            console.log(city);
            $.ajax({
                url: "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=fc68321f36609fbd9dcd3f318740aa8a",
                type: "GET",
                dataType: "jsonp",
                success:function(data){
                    curcity=data;
                    $("#error").html('');
                },
                error:function(data)
                {
                    $("#error").html('Wrong name of city');
                }
            });

              $.ajax({
                  url: "http://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=fc68321f36609fbd9dcd3f318740aa8a",
                  type: "GET",
                  dataType: "jsonp",
                  success: function (data) {
                      dayscity = data;
                  },
              });

        } else {
            $("#error").html('Wrong name of city');
        }
    })

    $('#sprawdzenie').click(function () {
            console.log(city);
            console.log(curcity);
            console.log(dayscity);
    });
})