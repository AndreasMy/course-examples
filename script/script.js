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
const findPath = /.*\/(.*)[0-9]*\.html/;

//* Get path
const path = window.location.pathname;
const currentPath = path.match(findPath);

//* Get html file name
let pathName;
if (currentPath && currentPath[1]) {
  pathName = currentPath[1];
}

//* Extract number and convert to int
const currentAddress = path.substring(6);
const matchedNum = pathName.match(findNum);
let iForward = parseInt(matchedNum);
let ibackward = parseInt(matchedNum);
const decrementNum = --ibackward;
const incrementNum = ++iForward;

//* Remove number from pathName and concatenate string
const addressName = pathName.replace(findNum, "");

let nextPage = `../pages/${addressName}${incrementNum}.html`;
let previousPage = `../pages/${addressName}${decrementNum}.html`;

function navPrevious() {
  window.location.href = `${previousPage}`;
  console.log(previousPage);
}

function navNext() {
  window.location.href = `${nextPage}`;
}

function navHome() {
  window.location.href = "../index.html";
}

console.log(`addressName: ${addressName}`);
console.log(`pathName: ${pathName}`);
console.log(matchedNum, typeof matchedNum);
console.log(decrementNum, incrementNum);
console.log(previousPage, nextPage);
