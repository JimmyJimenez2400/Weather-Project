/* eslint-disable import/no-cycle */
import displaySearchElement from "./searchElement";

import changeTemperature from "../../Logic/changeTemperature";

import convert24Hoursto12HoursFormat from "../../Logic/convert24Hto12H";

function displayLocationInfo(location, currentData, todayForecast) {
  const displayLocationInfoContainer = document.createElement("section");
  displayLocationInfoContainer.classList.add("display-location-info");

  const locationInfoContainer = document.createElement("section");
  locationInfoContainer.classList.add("locationInfoContainer");

  const countryDisplayContainer = document.createElement("section");
  countryDisplayContainer.classList.add("countryDisplayContainer");

  const countryDisplayTitle = document.createElement("h2");
  countryDisplayTitle.classList.add("countryDisplayTitle");

  countryDisplayTitle.textContent = `${location.country}`;

  countryDisplayContainer.appendChild(countryDisplayTitle);

  const regionDisplayContainer = document.createElement("section");
  regionDisplayContainer.classList.add("regionDisplayContainer");

  const regionDisplayTitle = document.createElement("h3");

  regionDisplayTitle.textContent = `${location.region}`;

  regionDisplayContainer.appendChild(regionDisplayTitle);

  const currentTimeDisplayContainer = document.createElement("section");
  const currentTimeDisplay = document.createElement("h3");
  currentTimeDisplay.textContent = `${convert24Hoursto12HoursFormat(
    location.localtime
  )}`;
  currentTimeDisplay.setAttribute("currentTemp", "c");

  currentTimeDisplayContainer.appendChild(currentTimeDisplay);

  const searchElement = displaySearchElement();

  const changeTemperatureButton = document.createElement("p");
  changeTemperatureButton.classList.add("changeTemperatureBtn");

  const cTemp = document.createElement("span");

  cTemp.textContent = "C";
  cTemp.classList.add("currentActive");
  cTemp.classList.add("cTemp");

  changeTemperatureButton.appendChild(cTemp);

  const splitter = document.createElement("span");
  splitter.textContent = "/";

  changeTemperatureButton.appendChild(splitter);

  const fTemp = document.createElement("span");

  fTemp.textContent = "F";
  fTemp.classList.add("fTemp");

  changeTemperatureButton.appendChild(fTemp);

  changeTemperatureButton.addEventListener("click", () => {
    changeTemperature(todayForecast, currentData);
  });

  locationInfoContainer.appendChild(countryDisplayContainer);
  locationInfoContainer.appendChild(regionDisplayContainer);
  locationInfoContainer.appendChild(currentTimeDisplayContainer);
  locationInfoContainer.appendChild(searchElement);
  locationInfoContainer.appendChild(changeTemperatureButton);

  displayLocationInfoContainer.appendChild(locationInfoContainer);

  const todayTemperatureContainer = document.createElement("section");
  todayTemperatureContainer.classList.add("todayTemperatureContainer");

  const todayTemperatureTitle = document.createElement("h1");
  todayTemperatureTitle.classList.add("temperature_c");
  todayTemperatureTitle.setAttribute("currentTemp", "c");

  todayTemperatureTitle.textContent = `${currentData.temp_c}°C.`; // We should make this an object property, status.current_temperature which will be C but when button pressed, it would be F

  const todayTemperatureIcon = document.createElement("img");
  todayTemperatureIcon.alt = `${currentData.condition.icon}`;

  const settingWeatherIcon = document.createElement("img");
  settingWeatherIcon.alt = `${currentData.condition.icon}`;

  const feelsLikeTitle = document.createElement("h4");
  feelsLikeTitle.classList.add("temperature_c");
  feelsLikeTitle.textContent = `Feels like ${currentData.feelslike_c}°C`;
  feelsLikeTitle.setAttribute("currentTemp", "c");

  const airType = document.createElement("h4");
  airType.textContent = `${currentData.condition.text}`;
  airType.setAttribute("currentTemp", "c");

  todayTemperatureContainer.appendChild(todayTemperatureTitle);
  todayTemperatureContainer.appendChild(todayTemperatureIcon);
  todayTemperatureContainer.appendChild(settingWeatherIcon);
  todayTemperatureContainer.appendChild(feelsLikeTitle);
  todayTemperatureContainer.appendChild(airType);

  displayLocationInfoContainer.appendChild(todayTemperatureContainer);

  return displayLocationInfoContainer;
}

export default displayLocationInfo;
