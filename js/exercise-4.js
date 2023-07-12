const btnDecrement = document.querySelector('[data-action="decrement"]')
const btnIncrement = document.querySelector('[data-action="increment"]')
const currentValue = document.querySelector('#value');
let counterValue = 0;
function decrement() {
    counterValue -= 1;
    currentValue.textContent = counterValue;
}
function increment() {
    counterValue += 1;
    currentValue.textContent = counterValue;
}
btnDecrement.addEventListener('click', decrement);
btnIncrement.addEventListener('click', increment)