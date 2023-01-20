var spanNombre = document.getElementById('errorNombre');
var spanEmail = document.getElementById('errorEmail');
var spanClave = document.getElementById('errorClave');
var spanConfirmarClave = document.getElementById('errorConfirmarClave');

var inputNombre = document.getElementById('nombre');
var inputEmail = document.getElementById('email');
var inputClave = document.getElementById('clave');
var inputConfirmarClave = document.getElementById('confirmarClave');

const form = document.getElementById('formulario');
form.noValidate = true;


inputNombre.oninput = function () {
    validarNombre();
};
inputEmail.oninput = function () {
    validarEmail();
};
inputClave.oninput = function () {
    validarClave();
};
inputConfirmarClave.oninput = function () {
    validarConfirmarClave();
};

function validarNombre() {
    if (!inputNombre.value) {
        spanNombre.style.display = "block"
        spanNombre.innerHTML = 'Rellene este campo';
        inputNombre.classList.add('input-nombre')
    } else if
        (!comprobarPatronNombre()) {
        spanNombre.style.display = "block"
        spanNombre.innerHTML = 'Nombre inv&aacute;lido';
        inputNombre.classList.add('input-nombre')
    } else {
        spanNombre.style.display = "none"
        spanNombre.innerHTML = '';
    }
}

function validarEmail() {
    if (!inputEmail.value) {
        spanEmail.style.display = "block"
        spanEmail.innerHTML = 'Rellene este campo';
        inputEmail.classList.add('input-email')
    } else if
        (!comprobarPatronEmail()) {
        spanEmail.style.display = "block"
        spanEmail.innerHTML = 'Email inv&aacute;lido';
        inputEmail.classList.add('input-email')
    } else {
        spanEmail.style.display = "none"
        spanEmail.innerHTML = '';
    }
}

function validarClave() {
    if (!inputClave.value) {
        spanClave.style.display = "block"
        spanClave.innerHTML = 'Rellene este campo';
        inputClave.classList.add('input-clave')
    } else if
        (!comprobarPatronClave()) {
        spanClave.style.display = "block"
        spanClave.innerHTML = 'Debe tener m&aacute;s de 8 caracteres';
        inputClave.classList.add('input-clave')
    } else {
        spanClave.style.display = "none"
        spanClave.innerHTML = '';
    }

    comprobarConfirmarClave();
}

function validarConfirmarClave() {
    if (!inputConfirmarClave.value) {
        spanConfirmarClave.style.display = "block"
        spanConfirmarClave.innerHTML = 'Rellene este campo';
        inputConfirmarClave.classList.add('input-confirmarClave')
    } else {
        comprobarConfirmarClave();
    }

}

form.onsubmit = function (e) {
    e.preventDefault();
    this.checkValidity() ? (alert('La inscripción se ha completado correctamente.'))
        : (
            validarNombre(),
            validarEmail(),
            validarClave(),
            validarConfirmarClave()
        );
}

function comprobarPatronNombre() {
    var pattern = /^[a-zA-Z]+$/;
    return pattern.test(inputNombre.value);
}

function comprobarPatronEmail() {
    var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return pattern.test(inputEmail.value);
}

function comprobarPatronClave() {
    var pattern = /^.{8,}$/;
    return pattern.test(inputClave.value);
}

function comprobarConfirmarClave() {
    if (inputClave.value != inputConfirmarClave.value) {
        spanConfirmarClave.style.display = "block"
        spanConfirmarClave.innerHTML = 'Las contrase&ntilde;as no coinciden';
        inputConfirmarClave.classList.add('input-confirmarClave')
        inputConfirmarClave.setCustomValidity("Invalid field.");
    } else {
        spanConfirmarClave.style.display = "none"
        spanConfirmarClave.innerHTML = '';
        inputConfirmarClave.setCustomValidity("");
    }
}