var cords = document.getElementById("cords");
var snow = document.getElementById("snow");

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        cords.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    cords.innerHTML = "Latitude: " + position.coords.latitude +
        "<br>Longitude: " + position.coords.longitude;
    getWeather(position);
    
}

function getWeather(position) {

    fetch("api.openweathermap.org/data/2.5/forecast?lat=44&lon=22&appid=d8cfbd2a75723eb46785b6b49b5cbde9")
        .then(response => response.json())
        .then(data => console.log(data))

        .catch(err => alert("Invalid Coords!"))

}