function slide() {
  let slideValue = document.querySelector("#slider").value;
  document.querySelector("#overlayImg").style.clipPath = `polygon(0 0, ${slideValue}% 0, ${slideValue}% 100%, 0 100%)`;
  console.log(
    "polygon(0 0," + slideValue + "% 0," + slideValue + "% 100%, 0 100%)"
  );
}
