const overlayImgOne = document.querySelector("#overlayImgOne");
const overlayImgTwo = document.querySelector("#overlayImgTwo");
const toggleLayerOne = document.querySelector("#toggleLayerOne");
const toggleLayerTwo = document.querySelector("#toggleLayerTwo");

let toggleFirstLayer = "off";
let toggleSecondLayer = "off";

toggleLayerOne.addEventListener("click", () => {
  toggleSecondLayer = "off";
  if (toggleFirstLayer === "off") {
    overlayImgOne.style = `opacity: 100%;`;
    toggleFirstLayer = "on";
  } else if (toggleFirstLayer === "on") {
    overlayImgOne.style = `opacity: 0%;`;
    toggleFirstLayer = "off";
  }
});

toggleLayerTwo.addEventListener("click", () => {
  toggleFirstLayer = "off";
  if (toggleSecondLayer === "off") {
    overlayImgTwo.style = `opacity: 100%;`;
    toggleSecondLayer = "on";
  } else if (toggleSecondLayer === "on") {
    overlayImgTwo.style = `opacity: 0%;`;
    toggleSecondLayer = "off";
  }
});
