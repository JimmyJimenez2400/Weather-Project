function displaySearchElement() {
  const searchContainer = document.createElement("section");

  searchContainer.classList.add("searchContainer");

  const inputElement = document.createElement("input");
  inputElement.id = "search";
  inputElement.type = "text";
  inputElement.placeholder = "Enter City";

  const searchBtn = document.createElement("button");
  searchBtn.textContent = "Search!";

  searchBtn.classList.add("btnSearch");

  searchContainer.appendChild(inputElement);
  searchContainer.appendChild(searchBtn);

  return searchContainer;
}

export default displaySearchElement;
