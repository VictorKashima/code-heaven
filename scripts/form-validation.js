const submitButton = document.querySelector('#submit');
const errorMessage = document.getElementsByClassName("input-error");
const allInput = document.getElementsByClassName("required");
const form = document.getElementById("signupForm");
const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
const passwordRegex = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{8,})$/;
const nameRegex = /^[a-záàâãéèêíïóôõöúçñ]+$/i;



form.addEventListener("submit", function(e) {
    
    if (nameValidate() && emailValidate() && passwordValidate() && confirmpasswordValidate()) {
        form.submit();
    } else {
        e.preventDefault();
        nameValidate();
        emailValidate();
        passwordValidate();
        confirmpasswordValidate();
    }

})



function nameValidate() {

    nome = allInput[0].value.split(' ').join('');
    nameBoolean = nome.match(nameRegex);
    
    if (nameBoolean) {
        if (nome.length < 3) {
            errorMessage[0].innerText = "Digite no mínimo 3 letras";
            return false;
        } else {
            errorMessage[0].innerText = "";
            return true;
        }
    } else if (nome == "") {
        errorMessage[0].innerText = "Preencha este campo";
        return false;
    } else {
        errorMessage[0].innerText = "Digite somente letras";
        return false;
    }

}



function emailValidate() {

    email = allInput[1].value;

    if (emailRegex.test(email)) {
        errorMessage[1].innerText = "";
        return true;
    } else if (email == "") {
        errorMessage[1].innerText = "Preencha este campo";
        return false;
    } else {
        errorMessage[1].innerText = "Digite o email corretamente";
        return false;
    }

}



function passwordValidate() {
    password = allInput[2].value;

    if (password.length >= 8) {
        errorMessage[2].innerText = "";
        return true;
    } else if (password == "") {
        errorMessage[2].innerText = "Preencha este campo";
        return false;
    } else {
        errorMessage[2].innerText = "Sua senha deve conter no mínimo 8 caracteres"
        return false;
    }
}



function confirmpasswordValidate() {
    confirmpassowrd = allInput[3].value;

    if (confirmpassowrd == "") {
        errorMessage[3].innerText = "Preencha este campo";
        return false;
    } else if (confirmpassowrd != password) {
        errorMessage[3].innerText = "Digite a mesma senha";
        return false;
    } else {
        errorMessage[3].innerText = "";
        return true;
    }
}