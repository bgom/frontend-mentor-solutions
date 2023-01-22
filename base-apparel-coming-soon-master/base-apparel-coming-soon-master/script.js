const sendBtn = document.querySelector(".submit")
const errorMsg = document.querySelector(".error")
const errorIcon = document.querySelector(".error-icon")
const formInput = document.querySelector(".email-input")

const emailValidation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const timeoutFunc = setInterval(() => {
    errorMsg.style.display = "none";
    errorIcon.style.display = "none";
    formInput.style.border = "1px solid var(--desaturated-red)";
}, 5000);

const validate = () => {
    let email = formInput.value
    if (!email.match(emailValidation) || email.length == 0) {
        errorMsg.style.display = "inline";
        errorIcon.style.display = "inline";
        formInput.style.border = "2px solid var(--soft-red)";
    }
}