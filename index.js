const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extend: false}));


require('./src/controllers/index')(app);

/*//botão login
document.getElementById('cadastroBtn').addEventListener('click', function () {
    var login = document.getElementById('inpLogin'),
        senha = document.getElementById('inpSenha'),
        erro = document.getElementById('error');
    erro.innerHTML = '';
    if (login.value.length >= 3 && senha.value.length >= 3) {
        axios.post('https://reqres.in/api/register', { email: login.value, password: senha.value })
            .then((Response) => {
                console.log(Response);
            }, (error) => {
                console.log(error);
                erro.innerHTML = 'Não foi possível cadastrar o usuário';
            });
        login.value = "";
        senha.value = "";
    } else {
        erro.innerHTML = 'Os campos devem conter ao menos 3 caracteres.';
    }
});

// LOGIN API REQ RES

document.getElementById('loginBtn').addEventListener('click', function () {
    var login = document.getElementById('inpLogin').value,
        senha = document.getElementById('inpSenha'),
        erro = document.getElementById('error'),
        nome = document.getElementById('nomeUsuario');
    erro.innerHTML = '';
    if (login.length >= 3 && senha.value.length >= 3) {
        axios.post('https://reqres.in/api/login', { email: login, password: senha.value })
            .then((Response) => {
                console.log(Response);
                localStorage.setItem("Login", login);
                localStorage.setItem("Token", Response.data.token);
                nome.innerHTML = "Logado como " + localStorage.getItem("Login");
                location.reload();
            }, (error) => {
                console.log(error);
                erro.innerHTML = 'Usuário não encontrado.';
            });
        login.value = "";
        senha.value = "";
    } else {
        erro.innerHTML = 'Os campos devem conter ao menos 3 caracteres.';
    }
});*/

app.listen(3000);