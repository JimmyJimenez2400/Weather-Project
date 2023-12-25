// eslint-disable-next-line import/no-cycle
import { newPage } from "../../flowControl/flowControl";

function displaySearchElement() {
  const searchContainer = document.createElement("section");

  searchContainer.classList.add("searchContainer");

  const inputElement = document.createElement("input");
  inputElement.id = "search";
  inputElement.type = "text";
  inputElement.autocomplete = "off";
  inputElement.placeholder = "Enter City";

  const searchBtn = document.createElement("button");
  searchBtn.textContent = "Search!";

  searchBtn.classList.add("btnSearch");

  searchBtn.addEventListener("click", () => {
    const inputValue = inputElement.value;
    newPage(inputValue);
  });

  searchContainer.appendChild(inputElement);
  searchContainer.appendChild(searchBtn);

  return searchContainer;
}

export default displaySearchElement;
