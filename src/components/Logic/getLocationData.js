async function getLocationInformation(value) {
  const getWeatherLocationData = await value;

  const getLocationData = await getWeatherLocationData.location;

  const information = {
    name: getLocationData.name,
    region: getLocationData.region,
    country: getLocationData.country,
    localtime: getLocationData.localtime,
    id: getLocationData.tz_id,
  };

  console.log(getLocationData);

  return information;
}

export default getLocationInformation;
