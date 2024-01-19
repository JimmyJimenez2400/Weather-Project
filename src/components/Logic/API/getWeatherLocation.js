import {
  loadingComponent,
  hideLoadingComponent,
} from "../../DOM/loadingComponent/loadingComponent";

import getGIPHYData from "./getGIPHYData";

// eslint-disable-next-line consistent-return
async function getCurrentWeatherLocationData(location) {
  // CALL GIPHYAPI
  const GIPHYData = getGIPHYData().then(
    (result) => result.data.images.original.url
  );

  const response = await GIPHYData;

  await loadingComponent(response);


  try {
    const weatherResponse = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=bcbc49485145475c855175911231711&q=${location}&days=3`,
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
