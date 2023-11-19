import dropDownMenuMaker from "dropdown-menu-builder/src/dropdown-menu/dropdown-menu";

function pageLoad() {
  const toggleMenu = document.querySelector(".toggleMenu");

  toggleMenu.appendChild(dropDownMenuMaker(["Home", "Today", "3-Day"]));
}

export default pageLoad;
