$(document).ready(function(){
    $('#submitWeather').click(function(){
        var city = $("#city").val();
        if(city != ''){
            $.ajax({
                url: 'http://api.openweathermap.org/data/2.5/weather?q=' + city + "&units=metric" + "&appid=e6b083e5d6a3878c0b6a113054978f02",
                type: "GET",
                dataType: "jsonp",
                success: function(data){
                    // var widget = show(data);
                    // $('#show').html(widget);
                    $('#city').val('');
                    updateDOM(data);
                    console.log(data);
                }
            });
        }else{
            $('#error').html("Field cannot be empty");
        }
    });

    // function show(data){
     

    //     return "<h3 class='text-center'>Current Weather " + data.name+ ", " + data.sys.country +  "</3>" +
    //           "<h3> " + data.weather[0].main +"</h3>" +
    //           "<h3><img src='http://openweathermap.org/img/w/" + data.weather[0].icon + ".png'> " + data.weather[0].description + "</h3>" +
    //           "<h3 class='temp'><strong>Tem</strong>: " + data.main.temp + " &deg;C</h3>" +
    //           "<h3><strong>Humidity</strong>: " + data.main.humidity + " %</h3>" +
    //           "<h3><strong>Presure</strong>: " + data.main.pressure + " hPa</h3>" +
    //           "<h3><strong>Max Temp</strong>: " + data.main.temp_max + " &deg;C</h3>" +
    //           "<h3><strong>Min Temperature</strong>: " + data.main.temp_min + " &deg;C</h3>" +
    //           "<h3><strong>Wind Speed</strong>: " + data.wind.speed + " m/s</h3>" +
    //           "<h3><strong>Wind Direction</strong>: " + data.wind.deg + " &deg;</h3>";

    // }

    var weatherIcon = {

            "01d": 'wi-day-sunny',
            '02d': 'wi-day-cloudy',
            '03d': 'wi-cloud',
            '04d': 'wi-cloudy',
            '09d': 'wi-showers',
            '10d': 'wi-day-rain-mix',
            '11d': 'wi-thunderstorm',
            '13d': 'wi-snow',
            '50d': 'wi-fog',
            '01n': 'wi-night-clear',
            '02n': 'wi-night-alt-cloudy',
            '03n': 'wi-night-alt-cloudy-high',
            '04n': 'wi-cloudy',
            '09n': 'wi-night-alt-sprinkle',
            '10n': 'wi-night-alt-showers',
            '11n': 'wi-night-alt-thunderstorm',
            '13n': 'wi-night-alt-snow',
            '50n': 'wi-night-fog'
    }

    function updateDOM(data){
        var city = data.name;
        var code = data.sys.country;
        $('.city').html(city + ", " + data.sys.country);

        var weather = data.weather[0].main;
        $('#weather').html(weather);

        var temp = data.main.temp;
        $('.temp').html(temp + "&deg; C");

        var wind = data.wind.deg;
        $('.wi wi-night-sleet').html(wind + "m/s");

        var weatherType = '';
        $('.weatherType').html(weatherType + "<img src='http://openweathermap.org/img/w/" + data.weather[0].icon + ".png'>");
    }
})