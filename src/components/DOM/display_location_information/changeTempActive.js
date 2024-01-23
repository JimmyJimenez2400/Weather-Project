function changeTempActiveDisplay() {
  // grab cTemp and fTemp and use ternary operator or if statement
  const cTemp = document.querySelector(".cTemp");
  const fTemp = document.querySelector(".fTemp");

  if (cTemp.classList.contains("currentActive")) {
    console.log("C TEMP HAS CURRENTACIVE");
    cTemp.classList.remove("currentActive");
    fTemp.classList.add("currentActive");
  } else {
    fTemp.classList.remove("currentActive");
    cTemp.classList.add("currentActive");
  }
}

export default changeTempActiveDisplay;
