const form = document.querySelector('.login-form')
function formSubmit(event) {
    event.preventDefault()
    const email = event.currentTarget.elements.email.value;
    const password = event.currentTarget.elements.password.value;
    if (email === '' || password === '') {
        window.alert('Заповніть поля ввода')
    } else {
        const formResult = {
        email,
        password
        }
        console.log(formResult)
    }
    
    event.currentTarget.reset();
}
form.addEventListener('submit', formSubmit)