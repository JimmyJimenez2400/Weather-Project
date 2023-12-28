function convert24Hoursto12HoursFormat(time) {
  const splitArr = time.split(" ");
  // check if its correct
  const getTime = splitArr[1];

  const splitTime = getTime.split(":");

  // convert 23 to 11 time

  console.log(splitTime);
  const hourTime = splitTime[0];
  console.log(hourTime);
  const minuteTime = splitTime[1];

  if (hourTime > 12) {
    console.log("GREATER THAN 12");
    const convert24to12 = hourTime - 12;
    return `${convert24to12}:${minuteTime} PM`;
  }
  // eslint-disable-next-line no-else-return
  else if (Number(hourTime) === 0) {
    console.log("IT EQUALS TO 0");
    const hourTime12 = 12;
    return `${hourTime12}:${minuteTime} AM`;
  }

  return `${hourTime}:${minuteTime} AM`;
}

export default convert24Hoursto12HoursFormat;
