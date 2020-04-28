$(function () {
    $(".jquery_essentials").html("Jquery Iniciado com Gatilho!");

    console.group("Mensagens");
    console.log("JQuery Essentials!");
    console.info("O JQuery foi carregado com sucesso!");
    console.warn("um alerta!");
    console.error("Um Erro!");
    console.groupEnd();

    var cadastro = false;

    console.group("Cadastro de Usuarios!");
    console.info("Cadastro Iniciado");

    if(cadastro === true){
        console.log("Cadastro Realizado!");
    }else{
        console.warn("Erro ao cadastrar!");
    }
    console.assert(cadastro === true,"Cadastro não realizado!"); //a mensagem somente aparece se a condição for falsa!1
    console.groupEnd();





});