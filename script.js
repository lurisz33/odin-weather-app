const searchButton = document.getElementById('search')
const weatherContainer = document.getElementById('weather-container');

searchButton.addEventListener('click', function () {
    const cityName = document.getElementById('city').value;
    getWeather(cityName);
})

function getWeather(cityName) {
    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${cityName}?unitGroup=metric&key=LRVNSUMYPZRJNFMXEQHHRNFU9&contentType=json`;
    fetch(url, {
        method: "GET",
        headers: {}
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            displayData(data);
        })
        .catch(err => {
            console.error('Error:', err);
        });
}

function displayData(weatherData) {
    weatherContainer.innerHTML = '';

    const { resolvedAddress, currentConditions } = weatherData;
    const { temp, feelsLike, humidity, windSpeed, conditions, sunrise, sunset } = currentConditions;

    const locationElement = document.createElement('h2');
    locationElement.textContent = `The weather in ${resolvedAddress}`;
    const temperatureElement = document.createElement('h2');
    temperatureElement.textContent = `Temperature: ${temp}`;
    const feelsLikeElement = document.createElement('h2');
    feelsLikeElement.textContent = `Temperature feels like: ${feelsLike}`;
    const humidityElement = document.createElement('h2');
    humidityElement.textContent = `Humidity: ${humidity}`;
    const conditionsElement = document.createElement('h2');
    conditionsElement.textContent = `Conditions are: ${conditions}`;
    const windSpeedElement = document.createElement('h2');
    windSpeedElement.textContent = `Wind speed: ${windSpeed}`;
    const sunriseElement = document.createElement('h2');
    sunriseElement.textContent = `Sunrise: ${sunrise}`;
    const sunsetElement = document.createElement('h2');
    sunsetElement.textContent = `Sunset: ${sunset}`;

    weatherContainer.appendChild(locationElement);
    weatherContainer.appendChild(temperatureElement);
    weatherContainer.appendChild(feelsLikeElement);
    weatherContainer.appendChild(humidityElement);
    weatherContainer.appendChild(windSpeedElement);
    weatherContainer.appendChild(conditionsElement);
    weatherContainer.appendChild(sunriseElement);
    weatherContainer.appendChild(sunsetElement);
}