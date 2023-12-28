import convert24Hoursto12HoursFormat from "../../Logic/convert24Hto12H";

function displayTodayForecast(forecastArr) {
  // Will display every hour of today's date
  const todayForeCastContainer = document.createElement("section");

  todayForeCastContainer.classList.add("todayForeCastContainer");

  for (let i = 0; i < forecastArr.length; i += 1) {
    const itemContainer = document.createElement("article");

    const temperatureDisplay = document.createElement("h4");
    temperatureDisplay.classList.add("hourTemperature");
    temperatureDisplay.textContent = `${forecastArr[i].temp_c}°C`;
    temperatureDisplay.setAttribute("currentTemp", "c");

    const timeDisplay = document.createElement("h5");
    timeDisplay.textContent = `${convert24Hoursto12HoursFormat(
      forecastArr[i].time
    )}`;

    const imgDisplay = document.createElement("img");
    imgDisplay.src = `${forecastArr[i].condition.icon}`;
    imgDisplay.alt = "DUMMY IMAGE";

    itemContainer.appendChild(temperatureDisplay);

    itemContainer.appendChild(imgDisplay);

    itemContainer.appendChild(timeDisplay);

    todayForeCastContainer.appendChild(itemContainer);
  }

  return todayForeCastContainer;
}

export default displayTodayForecast;
