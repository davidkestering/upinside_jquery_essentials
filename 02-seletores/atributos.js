$(function () {
    //selecao de todos os elementos que possuem o atributo class
    $("[class]").css("background","#ccc");

    //selecao de atributo especifico
    $("[data-upinside='true']").css("background","#006699");
    $("a[title!='UpInside']").css("background","red");

    //selecao de atributo que comecam com valor
    $("[class^='jquery']").css("background","#0099ff");

    //selecao de atributo que terminam com valor
    $("[class$='div']").css("color","#fff");

    //selecao de atributo que contenha determinado valor
    $("[class*='r']").css("font-weight","bold");

    //selecao de atributo que contenha um valor especifico
    $("[class~='jquery']").css("text-transform","uppercase");

    //selecao de atributo que contenha um valor especifico e seja seguido de hifen -
    $("[class|='jquery-essentials']").css("border-bottom","1px solid red");

    //combinacao de selecoes
    $("[class*='jquery'][data-upinside]").css("color","pink");
})