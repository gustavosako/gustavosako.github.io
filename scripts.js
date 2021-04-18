window.addEventListener("load", buttonDialog);

nome = document.getElementById('nomeUsuario');
btnLogin = document.getElementById('loginDialog');
btnSair = document.getElementById('btnSair');

if (localStorage.getItem("Login") !== null) {
    nome.innerHTML = "Logado como " + localStorage.getItem("Login");
    btnLogin.className = 'loginDialog hide'
    btnSair.className = 'sair show'
} else {
    nome.innerHTML = "Nenhum usuario logado";
    btnLogin.className = 'loginDialog'
    btnSair.className = 'sair'
}

function clearLS() {
    localStorage.clear();
    location.reload();
}

//  MOSTRA/ESCONDE A JANELA DE USUÁRIO
function buttonDialog() {
    var button = document.getElementById('loginDialog'),
        dialog = document.querySelector('.dialog');
    button.addEventListener("click", function () {
        if (dialog.className === 'dialog show')
            dialog.className = 'dialog';
        else
            dialog.className = 'dialog show';
    });
}

// CADASTRO NA API REQ RES

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
});

// Buscar Moeda

const showData = (result) => {
    for (const campo in result) {
        if (document.querySelector("#" + campo)) {
            document.querySelector("#" + campo).value = result[campo]
        }
    }
};

document.getElementById('inpBuscar').addEventListener('click', function () {
    codigo = document.getElementById('searchCode').value;
    const options = {
        method: 'GET',
        mode: 'cors',
        cache: 'default'
    }

    fetch(`https://api.n.exchange/en/api/v1/get_price/${codigo}/`, options)
        .then(response => {
            response.json().then(data => showData(data))
        })
        .catch(e => console.log('erro na busca'))
});