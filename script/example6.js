const imgContainer = document.querySelector("#imgContainer");
const iterationSlider = document.querySelector("#iterationSlider");
const vertexSlider = document.querySelector("#vertexSlider");

function createDivs() {
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

createDivs();

function rmElements() {
  const rmElements = document.querySelectorAll(".img");
  for (let rmElement of rmElements) {
    rmElement.remove();
  }
}

//* Canvas
const canvas = document.querySelector("#polyAproxCnv");
let ctx = canvas.getContext("2d");

drawHexagon(3);

function drawHexagon(vertices) {
  //* const a = 360 degrees divided by number of vertices
  const a = (2 * Math.PI) / vertices;
  const r = 150;

  ctx.clearRect(0, 0, canvas.clientWidth, canvas.height);
  ctx.beginPath();
  const x = 200;
  const y = 200;

  for (let i = 0; i < vertices; i++) {
    ctx.lineTo(x + r * Math.cos(a * i), y + r * Math.sin(a * i));
  }

  ctx.closePath();

  ctx.stroke();
}

vertexSlider.oninput = function () {
  let vertices = vertexSlider.value;
  drawHexagon(vertices);
};

//TODO breaakdown of a leg, arm or whatever