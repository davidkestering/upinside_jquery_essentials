$(function () {
    //selecao de tags com conteudo dentro delas
    $("p:parent").css("background","red");

    //selecao de tags sem conteudo dentro delas
    //$("p:empty").html("<b>Está vazio!</b>");

    //selecao de conteudo dentro de uma tag
    $("p:contains('Essentials')").css("color","#fff");

    //selecao de tags dentro de uma tag
    $("p:has('b')").text("AQUI");
});