async function getWeather() {
    const city = document.getElementById("cityInput").value;
    const apiKey = "2754c9686841b0b69d487a938d170c3d";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  
    const resultDiv = document.getElementById("weatherResult");
    resultDiv.innerHTML = "Loading...";
  
    try {
      const response = await fetch(url);
      const data = await response.json();
  
      if (data.cod === "404") {
        resultDiv.innerHTML = "City not found.";
      } else {
        resultDiv.innerHTML = `
          <h2>${data.name}</h2>
          <p>🌡️ Temp: ${data.main.temp}°C</p>
          <p>☁️ Weather: ${data.weather[0].description}</p>
          <p>💧 Humidity: ${data.main.humidity}%</p>
        `;
      }
    } catch {
      resultDiv.innerHTML = "Error fetching weather.";
    }
  }
  