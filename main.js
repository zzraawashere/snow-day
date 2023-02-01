var stats = document.getElementById("stats")
var city = document.getElementById("city");
var weather = document.getElementById("weather");
var temp = document.getElementById("temp");
var snow = document.getElementById("snow");

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } 
}

function showPosition(position) {
    
    getWeather(position);
    
}

function getWeather(position) {

    fetch("https://api.openweathermap.org/data/2.5/forecast?lat="+position.coords.latitude+"&lon="+position.coords.longitude+"&units=imperial&appid=d8cfbd2a75723eb46785b6b49b5cbde9")
        .then(response => response.json())
        
        .then(data => {
            var cityText = data["city"]["name"]
            var weatherText = data["list"]["0"]["weather"]["0"]["description"]
            var tempText = data["list"]["0"]["main"]["temp"]

            stats.innerHTML = "Stats for tomorrow:"

            if (weatherText.includes("snow")) {
                
                snow.innerHTML = "Snow day?: ❄️The signs are in your favor! It might be a snow-day tomorrow!❄️"
                
            } else {
                
                snow.innerHTML = "Snow day?: doesn't look like it :( sorry";
            }

            
            city.innerHTML = "City: " + cityText;
            weather.innerHTML = "Weather: " + weatherText;
            temp.innerHTML = "Temperature: " + tempText + " °F";
            
        })

        .catch(err => alert("Invalid Coords!"))

}