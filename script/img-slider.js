const imgContainer = document.querySelector("#imgContainer");
const iterationSlider = document.querySelector("#iterationSlider");
const vertexSlider = document.querySelector("#vertexSlider");

function createDivs() {
  const imgContainer = document.querySelector("#imgContainer");
  for (let i = 1; i <= 6; i++) {
    let img = document.createElement("img");
    img.className = `image img${i} hidden-image`;
    img.src = `../images/sl-${i}.JPG`;
    imgContainer.appendChild(img);

    //sliderValue is needed for the if statement
    iterationSlider.oninput = function () {
      const images = document.querySelectorAll(`.image`);
      const sliderValue = iterationSlider.value;
      images.forEach((img, index) => {
        if (index == sliderValue - 1) {
          img.classList.remove("hidden-image");
        } else {
          img.classList.add("hidden-image");
        }
      });
    };
  }
}
createDivs();

//* Load first image
function loadFirstImage() {
  let img = document.createElement("img");
  img.className = `image`;
  img.src = `../images/sl-1.JPG`;
  imgContainer.appendChild(img);
}
loadFirstImage();
