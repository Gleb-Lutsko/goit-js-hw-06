const btnCreate = document.querySelector('[data-create]')
const btnDestroy = document.querySelector('[data-destroy]')
const input = document.querySelector('input')
const boxes = document.querySelector("#boxes");
const resultArr = [];
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
function createBoxes(amount) {
    for (let i = 0; i <= amount; i += 1) {
        const divEl = document.createElement("div")
        divEl.style.backgroundColor = getRandomHexColor();
        divEl.style.width = `${30 + (i * 10)}px`;
        divEl.style.height = `${30 + (i * 10)}px`;
        resultArr.push(divEl);
    }
    boxes.append(...resultArr)
}
function destroyEl() {
    boxes.innerHTML = '';
}
btnCreate.addEventListener('click', () => {
    createBoxes(parseInt(input.value))
})
btnDestroy.addEventListener('click',destroyEl)
