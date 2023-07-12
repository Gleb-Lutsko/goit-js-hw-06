const btn = document.querySelector('.change-color');
const text = document.querySelector('.color');
function changeColor() {
    document.body.style.backgroundColor = getRandomHexColor();
    text.textContent = document.body.style.backgroundColor
}
btn.addEventListener('click', changeColor)
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}