var APIKey = "a8e363fa79f47b235034c984a2f3fa28";
var currentDay = moment().format("dddd, MMMM Do");

// Forecast Dates
var forecastDay1 = moment().add(1, 'days').format("M/D/YYYY");
var forecastDay2 = moment().add(2, 'days').format("M/D/YYYY");
var forecastDay3 = moment().add(3, 'days').format("M/D/YYYY");
var forecastDay4 = moment().add(4, 'days').format("M/D/YYYY");
var forecastDay5 = moment().add(5, 'days').format("M/D/YYYY");


// Sets City from search bar
$(document).ready(function() {
    $("#search-submit").on("click", function(event) {
        event.preventDefault();
        if ($("#search-bar").val() === "") {
            alert("Please Enter a City")
        } else {
        //Trim Spaces and turns input to lowercase for URL
        var plainCity = $("#search-bar").val();
        var trimCity = plainCity.trim();
        var lowerCity = trimCity.toLowerCase();

        //send City Name to getWeatherData function
        getWeatherData(lowerCity);
        }
    });
});



// Fetches Weather Data from OpenWeatherMap API
var getWeatherData = function(city) {

    var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=imperial&appid=" + APIKey;
    fetch(queryURL).then(function(response) {
        if (response.ok) {
            return response.json().then(function(data) {
                
                setCurrentInfo(data);
            });
        };
    });
};


var setCurrentInfo = function(data) {
    var currentWeather = data.list[0];
    console.log(currentWeather);
    //set Current Weather
    $("#active-city").text(data.city.name);
    $("#active-date").text(currentDay);
    $("#active-icon").attr("src", "http://openweathermap.org/img/wn/" + currentWeather.weather[0].icon +"@2x.png")
    $("#active-temp").text(currentWeather.main.temp);
    $("#active-wind").text(currentWeather.wind.speed);
    $("#active-humidity").text(currentWeather.main.humidity);

    //set 5 Day Forecast

    //Day 1
    var day1Object = data.list[8];
    $("#day-1-date").text(forecastDay1);
    $("#day-1-icon").attr("src", "http://openweathermap.org/img/wn/" + day1Object.weather[0].icon +"@2x.png");
    $("#day-1-temp").text(day1Object.main.temp);
    $("#day-1-wind").text(day1Object.wind.speed);
    $("#day-1-humidity").text(day1Object.main.humidity);

    //Day 2
    var day2Object = data.list[16];
    $("#day-2-date").text(forecastDay2);
    $("#day-2-icon").attr("src", "http://openweathermap.org/img/wn/" + day2Object.weather[0].icon +"@2x.png");
    $("#day-2-temp").text(day2Object.main.temp);
    $("#day-2-wind").text(day2Object.wind.speed);
    $("#day-2-humidity").text(day2Object.main.humidity);

    //Day 3
    var day3Object = data.list[24];
    $("#day-3-date").text(forecastDay3);
    $("#day-3-icon").attr("src", "http://openweathermap.org/img/wn/" + day3Object.weather[0].icon +"@2x.png");
    $("#day-3-temp").text(day3Object.main.temp);
    $("#day-3-wind").text(day3Object.wind.speed);
    $("#day-3-humidity").text(day3Object.main.humidity);

    //Day 4
    var day4Object = data.list[32];
    $("#day-4-date").text(forecastDay4);
    $("#day-4-icon").attr("src", "http://openweathermap.org/img/wn/" + day4Object.weather[0].icon +"@2x.png");
    $("#day-4-temp").text(day4Object.main.temp);
    $("#day-4-wind").text(day4Object.wind.speed);
    $("#day-4-humidity").text(day4Object.main.humidity);

    //Day 5
    var day5Object = data.list[39];
    $("#day-5-date").text(forecastDay5);
    $("#day-5-icon").attr("src", "http://openweathermap.org/img/wn/" + day5Object.weather[0].icon +"@2x.png");
    $("#day-5-temp").text(day5Object.main.temp);
    $("#day-5-wind").text(day5Object.wind.speed);
    $("#day-5-humidity").text(day5Object.main.humidity);


}


