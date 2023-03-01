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
const currentAddress = path.substring(6);
const matchedNum = currentAddress.match(findNum);
let iForward = parseInt(matchedNum);
let ibackward = parseInt(matchedNum);
console.log(currentAddress)

const decrementNum = --ibackward;
const incrementNum = ++iForward;

const address = currentAddress.substring(0, 8);
let nextPage = `../pages${address}${incrementNum}.html`;
let previousPage = `../pages${address}${decrementNum}.html`;
console.log(previousPage);

function navPrevious() {
  window.location.href = `${previousPage}`;
  console.log(previousPage);
}

function navNext() {
  window.location.href = `${nextPage}`;
}

function navHome() {
  window.location.href = "../index.html"
}

console.log(matchedNum, typeof matchedNum);
console.log(decrementNum, incrementNum);
console.log(path);
console.log(currentAddress, address);
console.log(previousPage, nextPage);
