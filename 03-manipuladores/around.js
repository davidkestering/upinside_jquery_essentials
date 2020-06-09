$(function () {
    //envolve cada paragrafo dentro de div
    //$("p").wrap("<div>");

    //envolve todos os paragrafos dentro de uma unica div
    $("p").wrapAll("<div>");

    //os conteudos internos dos paragrafos sao envolvidos por span
    $("p").wrapInner("<span>");

    //remover tag que envolve a tag principal, mas sempre imediatamente antecedente
    $("span").unwrap("p");

    $("span").wrap("<h2>");
})