const opacitySlider = document.querySelector("#opacitySlider");
const imgOverlay = document.querySelector("#imgOverlay")
 
function opacity() {
    let num = opacitySlider.value

    imgOverlay.style = `opacity: ${num}%`
}
