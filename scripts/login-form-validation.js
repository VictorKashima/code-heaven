const submitButton = document.querySelector('#submit');
const errorMessage = document.getElementsByClassName("input-error");
const allInput = document.getElementsByClassName("required");
const loginForm = document.getElementById("loginForm");
const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
const passwordRegex = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{8,})$/;
const nameRegex = /^[a-záàâãéèêíïóôõöúçñ]+$/i;

loginForm.addEventListener("submit", function(e) {
    
    if (loginEmailValidate() && loginPasswordValidate()) {
        signupForm.submit();
    } else {
        e.preventDefault();
        loginEmailValidate();
        loginPasswordValidate();
    }

})



function loginEmailValidate() {

    email = allInput[0].value;

    if (emailRegex.test(email)) {
        errorMessage[0].innerText = "";
        return true;
    } else if (email == "") {
        errorMessage[0].innerText = "Preencha com seu e-mail";
        return false;
    } else {
        errorMessage[0].innerText = "Digite o e-mail corretamente";
        return false;
    }

}



function loginPasswordValidate() {
    password = allInput[1].value;

    if (password.length >= 8 && password == User.password) {
        errorMessage[1].innerText = "";
        return true;
    } else if (password == "") {
        errorMessage[1].innerText = "Preencha com sua senha";
        return false;
    } else {
        errorMessage[1].innerText = "Sua senha deve conter no mínimo 8 caracteres"
        return false;
    }
}