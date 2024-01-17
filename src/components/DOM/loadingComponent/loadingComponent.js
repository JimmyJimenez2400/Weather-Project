function loadingComponent() {
  const contentContainer = document.querySelector("#content");
  const loadingContainer = document.createElement("div");

  loadingContainer.classList.add("loadingContainer");

  const loadingText = document.createElement("h1");

  loadingText.textContent = "Gathering data... AHHAHAhAHAHAHAHAHAHAH";

  const loadingContent = document.createElement("img");

  loadingContent.classList.add("loadingContent");
  loadingContainer.classList.add("show");

  loadingContainer.appendChild(loadingText);

  loadingContainer.appendChild(loadingContent);

  contentContainer.appendChild(loadingContainer);

  return loadingContainer;
}

function hideLoadingComponent() {
  const getLoadingComponent = document.querySelector(".loadingContainer");
  getLoadingComponent.remove();
}

export { loadingComponent, hideLoadingComponent };
