const submitButton = document.querySelector('#submit');
const errorMessage = document.getElementsByClassName("input-error");
const allInput = document.getElementsByClassName("required");
const signupForm = document.getElementById("signupForm");
const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
const passwordRegex = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{8,})$/;
const nameRegex = /^[a-záàâãéèêíïóôõöúçñ]+$/i;

class User {
    constructor(firstname, email, password) {
      this.firstName = firstname;
      this.email = email;
      this.password = password
    }
  }

signupForm.addEventListener("submit", function(e) {
    
    if (signNameValidate() && signEmailValidate() && signPasswordValidate() && signConfirmpasswordValidate()) {
        signupForm.submit();
        const user = new User(nome, email, password);
        console.log(user);

    } else {
        e.preventDefault();
        signNameValidate();
        signEmailValidate();
        signPasswordValidate();
        signConfirmpasswordValidate();
    }

})

//  SIGN UP FORM VALIDATION

function signNameValidate() {

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
        errorMessage[0].innerText = "Preencha com seu nome";
        return false;
    } else {
        errorMessage[0].innerText = "Digite somente letras";
        return false;
    }

}



function signEmailValidate() {

    email = allInput[1].value;

    if (emailRegex.test(email)) {
        errorMessage[1].innerText = "";
        return true;
    } else if (email == "") {
        errorMessage[1].innerText = "Preencha com seu e-mail";
        return false;
    } else {
        errorMessage[1].innerText = "Digite o e-mail corretamente";
        return false;
    }

}



function signPasswordValidate() {
    password = allInput[2].value;

    if (password.length >= 8) {
        errorMessage[2].innerText = "";
        return true;
    } else if (password == "") {
        errorMessage[2].innerText = "Preencha com sua senha";
        return false;
    } else {
        errorMessage[2].innerText = "Sua senha deve conter no mínimo 8 caracteres"
        return false;
    }
}



function signConfirmpasswordValidate() {
    confirmpassowrd = allInput[3].value;

    if (confirmpassowrd == "") {
        errorMessage[3].innerText = "Preencha com sua senha";
        return false;
    } else if (confirmpassowrd != password) {
        errorMessage[3].innerText = "Digite a mesma senha";
        return false;
    } else {
        errorMessage[3].innerText = "";
        return true;
    }
}