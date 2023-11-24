// Flow control will handle how the status of the current temperature (c/f), this will also execute both dom and api calls

import getCurrentWeatherLocationData from "../Logic/API/getWeatherLocation";

import displayLocationPage from "../DOM/display_location_information/displayLocationPage";

import getLocationInformation from "../Logic/getLocationData";

import getTodayForecastHours from "../Logic/getForecastHour";

import getCurrentData from "../Logic/getCurrentData";

// import other functions
const status = {
  current_city: null,
  current_temperature_sign: "c",
};

async function homePageListener(value) {
  // we will use the improted value here
  // call dom functions
  status.current_city = value;

  const jsonData = await getCurrentWeatherLocationData(value);

  console.log("THIS IS JSONDATA:");
  console.log(jsonData);

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

export default homePageListener;
