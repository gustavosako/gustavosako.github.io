window.addEventListener("load", buttonDialog);

//  MOSTRA/ESCONDE A JANELA DE USUÁRIO
function buttonDialog() {
    var button = document.getElementById('loginDialog'),
        dialog = document.querySelector('.dialog');
        button.addEventListener("click", function() {
            if (dialog.className === 'dialog show')
                dialog.className = 'dialog';
            else
                dialog.className = 'dialog show';
    });
}

// CADASTRO NA API REQ RES

document.getElementById('cadastroBtn').addEventListener('click', function() {
    var login = document.getElementById('inpLogin'),
        senha = document.getElementById('inpSenha'),
        erro = document.getElementById('error');
        erro.innerHTML = '';
    if (login.value.length >= 3 && senha.value.length >= 3) {
        axios.post('https://reqres.in/api/register', {email: login.value, password: senha.value})
            .then((Response) => {
                console.log(Response);
            }, (error) => {
                console.log(error);
            });
        login.value = "";
        senha.value = "";
    } else {
        erro.innerHTML = 'Os campos devem conter ao menos 3 caracteres.';
    }
});

// LOGIN API REQ RES

document.getElementById('loginBtn').addEventListener('click', function() {
    var login = document.getElementById('inpLogin'),
        senha = document.getElementById('inpSenha'),
        erro = document.getElementById('error');
        erro.innerHTML = '';
    if (login.value.length >= 3 && senha.value.length >= 3) {
        axios.post('https://reqres.in/api/login', {email: login.value, password: senha.value})
            .then((Response) => {
                console.log(Response);
            }, (error) => {
                console.log(error);
            });
        login.value = "";
        senha.value = "";
    } else {
        erro.innerHTML = 'Os campos devem conter ao menos 3 caracteres.';
    }
    
});