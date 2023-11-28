import displayLocationInfo from "./displayLocationInfo";

import displayTodayForecast from "./displayTodayForecast";

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
