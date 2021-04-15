window.addEventListener("load", buttonDialog);

//  MOSTRA/ESCONDE A JANELA DE USUÁRIO
function buttonDialog() {
    var button = document.getElementById('loginBtn'),
        dialog = document.querySelector('.dialog');
        button.addEventListener("click", function() {
            if (dialog.className === 'dialog show')
                dialog.className = 'dialog';
            else
                dialog.className = 'dialog show';
    });
}