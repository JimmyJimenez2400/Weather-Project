async function getCurrentData(value) {
  const getWeatherLocationData = await value;

  const currentData = await getWeatherLocationData.current;

  console.log("THIS IS CURRENT DATA:");
  console.log(currentData);

  return currentData;
}

export default getCurrentData;
