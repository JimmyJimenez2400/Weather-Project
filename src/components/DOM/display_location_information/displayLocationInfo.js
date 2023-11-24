import displaySearchElement from "./searchElement";

function displayLocationInfo(location, currentData) {
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
  currentTimeDisplay.textContent = `${location.localtime}`;

  currentTimeDisplayContainer.appendChild(currentTimeDisplay);

  locationInfoContainer.appendChild(countryDisplayContainer);
  locationInfoContainer.appendChild(regionDisplayContainer);
  locationInfoContainer.appendChild(currentTimeDisplayContainer);

  displayLocationInfoContainer.appendChild(displaySearchElement());
  displayLocationInfoContainer.appendChild(locationInfoContainer);

  const todayTemperatureContainer = document.createElement("section");
  todayTemperatureContainer.classList.add("todayTemperatureContainer");

  const todayTemperatureTitle = document.createElement("h1");

  todayTemperatureTitle.textContent = `${currentData.temp_c}`;

  const todayTemperatureIcon = document.createElement("img");
  todayTemperatureIcon.alt = `${currentData.condition.icon}`;

  const settingWeatherIcon = document.createElement("img");
  settingWeatherIcon.alt = `${currentData.condition.icon}`;

  const feelsLikeTitle = document.createElement("h4");
  feelsLikeTitle.textContent = `Feels like ${currentData.feelslike_c}`;

  const airType = document.createElement("h4");
  airType.textContent = `${currentData.condition.text}`;

  todayTemperatureContainer.appendChild(todayTemperatureTitle);
  todayTemperatureContainer.appendChild(todayTemperatureIcon);
  todayTemperatureContainer.appendChild(settingWeatherIcon);
  todayTemperatureContainer.appendChild(feelsLikeTitle);
  todayTemperatureContainer.appendChild(airType);

  displayLocationInfoContainer.appendChild(todayTemperatureContainer);

  return displayLocationInfoContainer;
}

export default displayLocationInfo;
