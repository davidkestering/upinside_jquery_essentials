$(function () {
    //selecao das tags dentro da primeira tag pesquisada
    //$("div p").css("color","red");
    $("article p").css("color","red");
    $("body *").css({
        display: "block",
        "margin-botton": "10px;"
    });

    //selecao dos filhos diretos da primeira tag pesquisada
    //$("article > p").css("color","blue");
    $("article > *").css("color","blue");

    //selecao da tag imediatamente posterior a primeira tag pesquisada
    //$("div + p").css("background","yellow");
    //$("p + a").css("background","yellow");
    $("div + *").css("background","yellow");

    //selecao das tags irmaos dentro da priemira tag pesquisada
    $("div ~ p").text("irmão");
})