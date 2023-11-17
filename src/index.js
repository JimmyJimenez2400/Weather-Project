import _ from "lodash";
import "./style.css";

function hello() {
  const sectionContainer = document.createElement("div");

  const h1 = document.createElement("h1");
  h1.innerHTML = _.join(["Hello", "webpack"], " ");
  h1.classList.add("hello");

  const h2 = document.createElement("h2");
  h2.textContent = "HELLLLO WORLD";

  sectionContainer.appendChild(h1);
  sectionContainer.appendChild(h2);

  return sectionContainer;
}

document.body.appendChild(hello());
