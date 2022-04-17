var APIKey = "a8e363fa79f47b235034c984a2f3fa28";
var city = "london";
var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=imperial&appid=" + APIKey;

// var iconURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
var currentDate = moment().format("M / D / YYYY");


var getWeatherData = function() {
    fetch(queryURL).then(function(response) {
        if (response.ok) {
            return response.json().then(function(data) {
                // console.log(data);
                setCurrentInfo(data);
            });
        };
    });
};


var setCurrentInfo = function(data) {
    console.log(data);
    var currentWeather = data.list[0];
    $("#active-city").text(city);
    $("#active-date").text(currentDate);
    $("#active-temp").text(currentWeather.main.temp);
    $("#active-wind").text(currentWeather.wind.speed);
    $("#active-humidity").text(currentWeather.main.humidity);
}

getWeatherData();
