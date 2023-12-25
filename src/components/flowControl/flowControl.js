// Flow control will handle how the status of the current temperature (c/f), this will also execute both dom and api calls

import getCurrentWeatherLocationData from "../Logic/API/getWeatherLocation";

import displayLocationPage from "../DOM/display_location_information/displayLocationPage";

import getLocationInformation from "../Logic/getLocationData";

import getTodayForecastHours from "../Logic/getForecastHour";

import getCurrentData from "../Logic/getCurrentData";

async function homePageListener(value) {
  const jsonData = await getCurrentWeatherLocationData(value);

  const locationData = await getLocationInformation(jsonData);

  const todayForecastHours = await getTodayForecastHours(jsonData);

  const currentData = await getCurrentData(jsonData);

  const content = document.querySelector("#content");

  const welcomeScreen = document.querySelector("#welcomeScreen");
  welcomeScreen.remove();

  content.appendChild(
    displayLocationPage(locationData, todayForecastHours, currentData)
  );
}

async function newPage(value) {
  const jsonData = await getCurrentWeatherLocationData(value);

  const locationData = await getLocationInformation(jsonData);

  const todayForecastHours = await getTodayForecastHours(jsonData);

  const currentData = await getCurrentData(jsonData);

  const content = document.querySelector("#content");

  const oldPage = document.querySelector("#displayLocationContainer");
  oldPage.remove();

  content.appendChild(
    displayLocationPage(locationData, todayForecastHours, currentData)
  );
}

export { homePageListener, newPage };
