function checkWeather() {

    let city = document.getElementById("city").value.trim();

    if (city === "") {
        alert("Please enter a city name");
        return;
    }


    let url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

    fetch(url)
    .then(response => response.json())
    .then(data => {

        if (data.error) {
            alert(data.error.message);
            return;
        }

        document.getElementById("showCity").innerHTML =
        data.location.name + ", " + data.location.country;

        document.getElementById("showTemp").innerHTML =
        data.current.temp_c + "°C";

        document.getElementById("showStatus").innerHTML =
        data.current.condition.text;

        document.getElementById("humidity").innerHTML =
        "Humidity: " + data.current.humidity + "%";

        document.getElementById("wind").innerHTML =
        "Wind: " + data.current.wind_kph + " km/h";

        document.getElementById("icon").src =
        "https:" + data.current.condition.icon;

    })
    .catch(() => {
        alert("Unable to fetch weather data.");
    });

}