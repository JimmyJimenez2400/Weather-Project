async function loadingComponent(GIPHY) {
  const contentContainer = document.querySelector("#content");
  const loadingContainer = document.createElement("div");

  loadingContainer.classList.add("loadingContainer");

  const loadingImage = document.createElement("img");

  loadingImage.src = GIPHY;

  // loadingImage.src = `${GIPHY.data.images.original.url}`;

  const loadingContent = document.createElement("img");

  loadingContent.classList.add("loadingContent");
  loadingContainer.classList.add("show");

  loadingContainer.appendChild(loadingImage);

  loadingContainer.appendChild(loadingContent);

  contentContainer.appendChild(loadingContainer);

  return loadingContainer;
}

function hideLoadingComponent() {
  const getLoadingComponent = document.querySelector(".loadingContainer");
  getLoadingComponent.remove();
}

export { loadingComponent, hideLoadingComponent };
