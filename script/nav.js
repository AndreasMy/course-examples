//? js knows the page location
//? assign correct address location for nav buttons
const regExNum = /\d+/g;
const regExPath = /.*\/(.*)[0-9]*\.html/;

//* Get path
const path = window.location.pathname;
const currentPath = path.match(regExPath);

//* Get html file name
let pathName;
if (currentPath && currentPath[1]) {
  pathName = currentPath[1];
}

//* Extract number and convert to int
const matchedNum = pathName.match(regExNum);
let indexBackward = parseInt(matchedNum);
let indexForward = parseInt(matchedNum);
const decrementNum = --indexBackward;
const incrementNum = ++indexForward;

//* Remove number from pathName and concatenate string
const addressName = pathName.replace(regExNum, "");

let nextPage = `../pages/${addressName}${incrementNum}.html`;
let previousPage = `../pages/${addressName}${decrementNum}.html`;

function navPrevious() {
  window.location.href = `${previousPage}`;
}

function navNext() {
  window.location.href = `${nextPage}`;
}

function navHome() {
  window.location.href = "../index.html";
}
