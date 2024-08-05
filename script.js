let weather = {
    "apiKey": "87924811babc404d98eb2a105ecc6646",
    fetchWeather: function () {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=Kolkata&units=metric&appid=867924811babc404d98eb2a105ecc664"
        )
            .then((response) => response.json())
            .then((data) => console.log(data));

    },
};