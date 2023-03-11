const imgContainer = document.querySelector("#imgContainer");
const iterationSlider = document.querySelector("#iterationSlider");
const vertexSlider = document.querySelector("#vertexSlider");

function createDivs() {
  let img = document.createElement("img");
  img.className = `image`;
  img.src = `../images/sl-1.jpg`
  imgContainer.appendChild(img);

  iterationSlider.oninput = function () {
    rmElements();
    let i = iterationSlider.value;
    img = document.createElement("img");
    img.className = `image`;
    img.src = `../images/sl-${i}.jpg`
    imgContainer.appendChild(img);
  };
}

createDivs();

function rmElements() {
  const rmElements = document.querySelectorAll(".image");
  for (let rmElement of rmElements) {
    rmElement.remove();
  }
}

/* function createDivs() {
  let square = document.createElement("div");
  square.className = `img-1 img`;
  imgContainer.appendChild(square);

  iterationSlider.oninput = function () {
    rmElements();
    let i = iterationSlider.value;
    square = document.createElement("div");
    square.className = `img-${i} img`;
    imgContainer.appendChild(square);
  };
}

createDivs(); */