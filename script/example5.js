const imgContainer = document.querySelector("#imgContainer");
const valueScaleContainer = document.querySelector("#valueScaleContainer");

//? Images
const imgDefault = document.querySelector("#imgDefault");
const imgDarker = document.querySelector("#imgDarker");
const imgMiddle = document.querySelector("#imgMiddle");
const imgBright = document.querySelector("#imgBright");
const imgContrast = document.querySelector("#imgContrast");
const imgColor = document.querySelector("#imgColor");

//? Buttons
const btnColor = document.querySelector("#btnColor");
const btnDefault = document.querySelector("#btnDefault");
const btnDark =  document.querySelector("#btnDark");
const btnHalftone = document.querySelector("#btnHalftone");
const btnLigth = document.querySelector("#btnLigth");
const btnConstrast = document.querySelector("#btnConstrast");

//* create greyscale
function createColumn() {
  
  for (let i = 0; i < 10; i++) {

    let newRgb = 255 * 0.66 ** i;
    let gridItem = document.createElement("div");
    gridItem.className = `grid-item item${[i]}`;

      if (newRgb < 9) {
        newRgb = 0;
      }

    gridItem.style.backgroundColor = `rgb(${newRgb}, ${newRgb}, ${newRgb})`;
    valueScaleContainer.appendChild(gridItem);
  }
}

createColumn();

//? loop through all divs

btnColor.addEventListener("click", () => {
  imgColor.style = `opacity: 100%;`

  imgContrast.style = `opacity: 0%;`
  imgDefault.style = `opacity: 0%;`
  imgDarker.style = `opacity: 0%;`
  imgMiddle.style = `opacity: 0%;`
  imgBright.style = `opacity: 0%;`
})

btnDefault.addEventListener("click", () => {
  imgDefault.style = `opacity: 100%;`

  imgColor.style = `opacity: 0%;`
  imgDarker.style = `opacity: 0%;`
  imgMiddle.style = `opacity: 0%;`
  imgBright.style = `opacity: 0%;`
  imgContrast.style = `opacity: 0%;`


})

btnDark.addEventListener("click", () => {
  imgDarker.style = `opacity: 100%;`

  imgColor.style = `opacity: 0%;`
  imgDefault.style = `opacity: 0%;`
  imgMiddle.style = `opacity: 0%;`
  imgBright.style = `opacity: 0%;`
  imgContrast.style = `opacity: 0%;`
})

btnHalftone.addEventListener("click", () => {
  imgMiddle.style = `opacity: 100%;`

  imgColor.style = `opacity: 0%;`
  imgDefault.style = `opacity: 0%;`
  imgDarker.style = `opacity: 0%;`
  imgBright.style = `opacity: 0%;`
  imgContrast.style = `opacity: 0%;`
})

btnLigth.addEventListener("click", () => {
  imgBright.style = `opacity: 100%;`

  imgColor.style = `opacity: 0%;`
  imgDefault.style = `opacity: 0%;`
  imgDarker.style = `opacity: 0%;`
  imgMiddle.style = `opacity: 0%;`
  imgContrast.style = `opacity: 0%;`
})

btnConstrast.addEventListener("click", () => {
  imgContrast.style = `opacity: 100%;`

  imgColor.style = `opacity: 0%;`
  imgDefault.style = `opacity: 0%;`
  imgDarker.style = `opacity: 0%;`
  imgMiddle.style = `opacity: 0%;`
  imgBright.style = `opacity: 0%;`
})