//* Canvas
const canvas = document.querySelector("#polyAproxCnv");
let ctx = canvas.getContext("2d");

drawHexagon(5);

function drawHexagon(vertices) {
  //* const a = 360 degrees divided by number of vertices
  const a = (2 * Math.PI) / vertices;
  const r = 150;

  ctx.clearRect(0, 0, canvas.clientWidth, canvas.height);
  ctx.beginPath();
  const x = 175;
  const y = 175;

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