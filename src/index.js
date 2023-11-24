import "./style.css";

import homePageListener from "./components/flowControl/flowControl";

const searchButton = document.querySelector(".searchBtn");

const inputValue = document.querySelector("#location");

searchButton.addEventListener("click", () => {
  const getUserInputValue = inputValue.value;

  homePageListener(getUserInputValue);
});
