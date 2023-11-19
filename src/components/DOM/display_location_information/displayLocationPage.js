import displayLocationInfo from "./displayLocationInfo";

import displayTodayForecast from "./displayTodayForecast";

function displayLocationPage() {
  const displayLocationContainer = document.createElement("section");

  // const displayLocationInfo = document.querySelector(".display-location-info");

  displayLocationContainer.id = "displayLocationContainer";

  displayLocationContainer.appendChild(displayLocationInfo());

  displayLocationContainer.appendChild(displayTodayForecast(4));

  return displayLocationContainer;
}

export default displayLocationPage;
