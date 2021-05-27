function alternarCadastro(){

    cadastro.style.display = 'none';
    login.style.display = 'block';

}

function alternarLogin(){

    login.style.display = 'none';
    cadastro.style.display = 'block';

}

var email = 0;
var senha = 0;

function validCadastro() {
    email = in_email.value;
    senha = in_senha.value;

    var validacao_email_1 = email.indexOf('@');
    var validacao_email_2 = email.length;

    var validacao_senha_1 = senha.indexOf('#');
    var validacao_senha_2 = senha.length;

    if (validacao_email_1 < 0 && validacao_email_2 <= 10) {
        alert('e-mail inválido, ele deve ter pelo menos um @ e 10 dígitos');
    }

    if (validacao_senha_1 < 0 && validacao_senha_2 <= 8) {
        alert('senha fraca, ela deve ter pelo menos um # e 8 dígitos');
    }

    else {
        alert('Cadastro Feito com sucesso. Efetue o seu Login!');
        alternarCadastro();
        // verificarLogin();
    }

    
}

function verificarLogin() {
    if ((log_email.value == email) && (log_senha.value == senha)) {

        window.location.href = "dashboard.html";
        alert("Logado com sucesso");

    }else{
    
        alert("Campos incorretos, verifique seu e-mail ou senha")
        
    }
}