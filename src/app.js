function showTemperature(response) {
  console.log(response);
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = response.data.name;
  let descriptionElement = document.querySelector("#description");
  descriptionElement.innerHTML = response.data.weather[0].description;
  let humidityElement = document.querySelector("#humidity");
  humidityElement.innerHTML = response.data.main.humidity;
  let windElement = document.querySelector("#wind");
  windElement.innerHTML = Math.round(response.data.wind.speed);
}

let apiKey = "8161b4309ee03faae957729ba7104797";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=las vegas&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(showTemperature);
