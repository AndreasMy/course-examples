function slide() {
  let slideValue = document.querySelector("#slider").value;
  document.querySelector(
    "#overlayImg"
  ).style.clipPath = `polygon(0 0, ${slideValue}% 0, ${slideValue}% 100%, 0 100%)`;

  console.log(
    "polygon(0 0," + slideValue + "% 0," + slideValue + "% 100%, 0 100%)"
  );
}

function slide1() {
  let slideValue = document.querySelector("#slider2").value;
  document.querySelector(
    "#overlayImg2"
  ).style.clipPath = `polygon(0 0, ${slideValue}% 0, ${slideValue}% 100%, 0 100%)`;

  console.log(
    "polygon(0 0," + slideValue + "% 0," + slideValue + "% 100%, 0 100%)"
  );
}

//? js knows the page location
//? assign correct address location for nav buttons
const findNum = /\d+/g;
const path = window.location.pathname;
const currentAddress = path.substring(7);
const matchedNum = currentAddress.match(findNum);
let i = parseInt(matchedNum);

const address = currentAddress.substring(0, 8);
let nextPage = `../pages/${address}${++i}.html`;
let previousPage = `../pages/${address}${--i}.html`;

console.log(matchedNum, typeof matchedNum);
console.log(i, ++i);
console.log(path);
console.log(previousPage, nextPage);
console.log(currentAddress, address);
