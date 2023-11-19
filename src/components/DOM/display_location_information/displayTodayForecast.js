function displayTodayForecast(lengthOfData) {
  // Will display every hour of today's date
  const todayForeCastContainer = document.createElement("section");

  todayForeCastContainer.classList.add("todayForeCastContainer");

  for (let i = 0; i < lengthOfData; i += 1) {
    const itemContainer = document.createElement("article");

    const temperatureDisplay = document.createElement("h4");
    temperatureDisplay.textContent = "DUMMY TITLE";

    const timeDisplay = document.createElement("h5");
    timeDisplay.textContent = "TIME DUMMY";

    const imgDisplay = document.createElement("img");
    imgDisplay.alt = "DUMMY IMAGE";

    itemContainer.appendChild(temperatureDisplay);

    itemContainer.appendChild(timeDisplay);

    itemContainer.appendChild(imgDisplay);

    todayForeCastContainer.appendChild(itemContainer);
  }

  return todayForeCastContainer;
}

export default displayTodayForecast;
