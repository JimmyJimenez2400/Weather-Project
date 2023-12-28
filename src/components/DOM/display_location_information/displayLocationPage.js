/* eslint-disable import/no-cycle */
import displayLocationInfo from "./displayLocationInfo";

import displayTodayForecast from "./displayTodayForecast";

import convert24Hoursto12HoursFormat from "../../Logic/convert24Hto12H";

function displayLocationPage(locationData, todayForecast, currentData) {
  const displayLocationContainer = document.createElement("section");

  // const displayLocationInfo = document.querySelector(".display-location-info");

  displayLocationContainer.id = "displayLocationContainer";

  displayLocationContainer.appendChild(
    displayLocationInfo(locationData, currentData, todayForecast)
  );

  displayLocationContainer.appendChild(displayTodayForecast(todayForecast));

  return displayLocationContainer;
}

export default displayLocationPage;
