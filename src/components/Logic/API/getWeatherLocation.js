// eslint-disable-next-line consistent-return
async function getCurrentWeatherLocationData(location) {
  try {
    const weatherResponse = await fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=bcbc49485145475c855175911231711&q=${location}&days=3`,
      { mode: "cors" }
    );

    if (!weatherResponse.ok) {
      throw new Error("FAILED STATUS");
    }

    const weatherData = await weatherResponse.json();
    console.log("THIS IS THE WEATHER DATA:");
    console.log(weatherData);

    return weatherData;
  } catch (error) {
    console.error(`ERROR HAS BEEN DETECTED: ${error}`);
  }
}

export default getCurrentWeatherLocationData;
