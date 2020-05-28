$(function () {
    //todas as tags que nao tem determinada classe
    $("p:not('.p')").css("font-weight","bold");

    //filtrar posicao de indice dos elementos
    $("p:first").css("color","red");
    $("p:last").css("color","red");
    $("p:eq(4)").text("jQuery Essentials"); //igual a posicao 04
    $("p:gt(4)").text("Maior jQuery Essentials"); //maior que a posicao 04
    $("p:lt(4)").text("Menor jQuery Essentials"); //menor que a posicao 04

    //posicoes pares e impares
    $("p:even").css("background","#eee"); //posicao par
    $("p:odd").css("background","#ccc"); //posicao impar

    //filtrando os h1..h6 headers
    $(".list :header").css({ //o espaco eh necessario pois nao tem header na div com classe list, na verdade sao dois elementos, a div e como filho dela os headers
        "font-size":"1.4em",
        color: "#888"
    });

    //animacao
    $(".list :header span").css("color","blue");
    
    function animar_el(elemento) {
        $(elemento).fadeToggle(400,function () {
            animar_el(elemento);
        })
    }

    var num = 1;
    //funcao nativa temporizada
    setInterval(function () {
        $(":animated").text(num);
        num++;
    },800);

    animar_el(".list span");

    //seletor com elemento focado
    $(":focus").css("padding","10px");

    //seletor raiz
    console.log($(":root"));
})