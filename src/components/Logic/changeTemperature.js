function changeCurrentTemperature(currentData) {
  const currentTemperature = document.querySelectorAll(".temperature_c");

  for (let i = 0; i < currentTemperature.length; i += 1) {
    const currentTemperatureAttribute =
      currentTemperature[i].getAttribute("currenttemp");
    if (currentTemperatureAttribute === "c") {
      currentTemperature[i].setAttribute("currenttemp", "f");
      currentTemperature[0].textContent = `${currentData.temp_f}℉
      `;
      currentTemperature[1].textContent = `Feels Like ${currentData.feelslike_f}℉`;
    } else if (currentTemperatureAttribute === "f") {
      currentTemperature[i].setAttribute("currenttemp", "c");
      currentTemperature[0].textContent = `${currentData.temp_c}°C
      `;
      currentTemperature[1].textContent = `Feels Like ${currentData.feelslike_c}°C`;
    }
  }
}

function changeHourTemperature(forecast) {
  const getAllForecastElements = document.querySelectorAll(".hourTemperature");

  console.log(getAllForecastElements);

  const forecastElements = Array.from(getAllForecastElements);

  for (let i = 0; i < forecast.length; i += 1) {
    const celciusTemp = forecast[i].temp_c;
    const fahrenheitTemp = forecast[i].temp_f;
    const getCurrentStatus = forecastElements[i].getAttribute("currenttemp");

    if (getCurrentStatus === "c") {
      forecastElements[i].setAttribute("currenttemp", "f");
      forecastElements[i].textContent = `${fahrenheitTemp} ℉`;
    } else if (getCurrentStatus === "f") {
      forecastElements[i].setAttribute("currenttemp", "c");
      forecastElements[i].textContent = `${celciusTemp} °C`;
    }
  }
}

function changeTemperature(forecast, currentData) {
  changeCurrentTemperature(currentData);
  changeHourTemperature(forecast);
}

export default changeTemperature;
