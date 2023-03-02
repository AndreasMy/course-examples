const imgContainer = document.querySelector("#imgContainer");

function createColumn(amount) {
  const valueScaleContainer = document.querySelector("#valueScaleContainer");
/* 
  valueScaleContainer.style = `grid-template-columns: repeat(1, 1fr);
                                 grid-template-rows: repeat(15, 1fr);`; */

  /*   for (let i = 0; i < 15; i++) {
    let gridItem = document.createElement("div");
    gridItem.className = "grid-item";
    gridItem.setAttribute("id", "gridItem");
    valueScaleContainer.appendChild(gridItem);
  } */
  //* create greyscale

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
