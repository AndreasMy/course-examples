const imgContainer = document.querySelector("#imgContainer");
const valueScaleContainer = document.querySelector("#valueScaleContainer");

const imgColor = document.querySelector("#imgColor");

//? Buttons
const btnColor = document.querySelector("#btnColor");
const btnDefault = document.querySelector("#btnDefault");
const btnDark = document.querySelector("#btnDark");
const btnHalftone = document.querySelector("#btnHalftone");
const btnLigth = document.querySelector("#btnLigth");
const btnConstrast = document.querySelector("#btnConstrast");

const divArr = [];
function createGreyScaleCol(items) {
  for (let i = 0; i < items; i++) {
    let newRgb = 255 * 0.66 ** i;
    let gridItem = document.createElement("div");
    gridItem.className = `item${[i]}`;
    
    if (newRgb < 9) {
      newRgb = 0;
    }

    gridItem.style.height = `100%`
    gridItem.style.maxWidth = `4rem`
    gridItem.style.backgroundColor = `rgb(${newRgb}, ${newRgb}, ${newRgb})`;
    valueScaleContainer.appendChild(gridItem);

    //push each gridItem to divArr
    divArr.push(gridItem);
  }
}
createGreyScaleCol(10);

console.log(divArr);


function highlightValues(...args) {
  divArr.forEach((item, index) => {
    if (args.includes(index)) {
      item.style.border = "3px solid red";
    } else {
      item.style.border = "none";
    }
  });
}

btnColor.addEventListener("click", () => {
  highlightValues(0, 1, 2, 3, 4, 5, 6, 7, 8, 9);
  imgColor.style = `filter: grayscale(var(--value, 0%))`;
});

btnDefault.addEventListener("click", () => {
  highlightValues(0, 1, 2, 3, 4, 5, 6, 7, 8, 9);
  imgColor.style = `filter: grayscale(var(--value, 100%))`;
});

btnDark.addEventListener("click", () => {
  highlightValues(3, 4, 5, 6, 7, 8, 9);
  imgColor.style = `filter: grayscale(100%) brightness(40%) contrast(95%);`;
});

btnHalftone.addEventListener("click", () => {
  highlightValues(0, 1, 2, 3, 4);
  imgColor.style = `filter: grayscale(100%) brightness(95%) contrast(73%);`;
});

btnLigth.addEventListener("click", () => {
  highlightValues(0, 1, 2, 3);
  imgColor.style = `filter: grayscale(100%) brightness(100%) contrast(50%);`;
});

btnConstrast.addEventListener("click", () => {
  highlightValues(0, 1, 2, 7, 8, 9);
  imgColor.style = `filter: grayscale(100%) brightness(160%) contrast(130%);`;
});
