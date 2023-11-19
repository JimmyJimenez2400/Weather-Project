import "./style.css";
import pageLoad from "./components/DOM/pageLoad";

import getCurrentWeatherLocationData from "./components/Logic/API/getWeatherLocation";

import displayLocationPage from "./components/DOM/display_location_information/displayLocationPage";

pageLoad();

const searchBtn = document.querySelector(".searchBtn");

searchBtn.addEventListener("click", () => {
  const content = document.querySelector("#content");
  // get input value
  const getInput = document.querySelector("#location");
  const getInputValue = getInput.value;

  console.log(getInputValue);

  getCurrentWeatherLocationData(getInputValue);

  const welcomeScreen = document.querySelector("#welcomeScreen");
  welcomeScreen.remove();

  content.appendChild(displayLocationPage());

  // once we have the data, we'll remove the initial page and load in the new one

  // pass input value to function
  // remove this page and grab the other
});
