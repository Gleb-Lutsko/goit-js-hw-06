const inputSlider = document.querySelector('#font-size-control')
const text = document.querySelector('#text')
inputSlider.addEventListener('input', slider)
function slider() {
    text.style.fontSize = inputSlider.value + 'px';
}