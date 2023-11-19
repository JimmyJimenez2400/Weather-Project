async function getTodayForecastHours(value) {
  const weatherLocationData = await value;

  console.log(weatherLocationData);

  const { forecast } = weatherLocationData;

  const foreCastArr = forecast.forecastday;

  const todayForecast = foreCastArr[0].hour;

  console.log(todayForecast);

  return todayForecast;
}

export default getTodayForecastHours;
