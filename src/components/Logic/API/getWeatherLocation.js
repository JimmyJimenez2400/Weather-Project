import {
  loadingComponent,
  hideLoadingComponent,
} from "../../DOM/loadingComponent/loadingComponent";

// eslint-disable-next-line consistent-return
async function getCurrentWeatherLocationData(location) {
  // SHOW LOADING ANIMATION HERE
  loadingComponent();
  try {
    const weatherResponse = await fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=bcbc49485145475c855175911231711&q=${location}&days=3`,
      { mode: "cors" }
    );

    if (!weatherResponse.ok) {
      throw new Error("FAILED STATUS");
    }

    const weatherData = await weatherResponse.json();

    return weatherData;
  } catch (error) {
    console.error(`ERROR HAS BEEN DETECTED: ${error}`);
  } finally {
    // hide loader
    hideLoadingComponent();
  }
}

export default getCurrentWeatherLocationData;
