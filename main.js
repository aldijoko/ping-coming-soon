const submitButton = document.getElementById("submitBtn");
const emailRegXep = new RegExp("(^[a-z0-9])([a-z0-9\!\#\$\%\&\'\*\+\-\/\=\?\^\_\`\{\|\]\*]*)@[a-z0-9]+[\.]{1}.+[a-z0-9]+$", "i");
const email = document.querySelector(".form-input");
const errorMessage = document.querySelectorAll(".error-text");

submitButton.addEventListener("click", () => {
    console.log('tes')
    if(!emailRegXep.test(email.value)) {
        errorMessage.forEach(message => {
            message.style.opacity = "1";
        })
        email.classList.add('border-error');
    }
    else{
        errorMessage.forEach(message => {
            message.style.opacity = "0";
        })
        email.classList.remove('border-error');
    }
})

