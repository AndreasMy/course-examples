const overlayImg = document.querySelector("#overlayImg");
const toggleLayer = document.querySelector("#toggleLayer");
let toggle = "off";

toggleLayer.addEventListener("click", () => {
  if (toggle === "off") {
    overlayImg.style = `opacity: 100%;`;
    toggle = "on";
  } else if (toggle === "on") {
    overlayImg.style = `opacity: 0%;`;
    toggle = "off";
  }
});
