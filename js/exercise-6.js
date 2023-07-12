const input = document.querySelector('#validation-input');
const dataLength = Number(input.dataset.length);
function inputValidate() {
    if (input.value.length === dataLength) {
        input.classList.remove('invalid')
        input.classList.add('valid')
    } else {
        input.classList.remove('valid')
        input.classList.add('invalid')
    }
}
input.addEventListener('blur', inputValidate)