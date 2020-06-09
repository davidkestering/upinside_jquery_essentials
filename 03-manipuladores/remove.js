$(function () {
    //remove sem efeito
    $(".b").remove();

    //efeito fadeout de 2segs e depois com o callback ele remove
    /*$(".b").fadeOut(2000,function () {
        //aqui o objeto que recebeu o efeito do fadeout eh removido
        $(this).remove();
    })*/

    //limpa conteudo de dentro do elemento
    $(".d").empty();
    //alterar texto elemento com temporizacao
    setTimeout(function () {
        $(".d").text("#BoraProgramar");
    },2000);


    //acao quando houver um click
    $("p").on("click",function () {
        $(this).toggleClass("active");
    });

    //remover conteudo mas deixar tags disponivel
    var p;
    $(".button").on("click",function () {
        if(p){
            p.appendTo(".r");
            p = null;
        }else{
            //depois que remove os efeitos de click nao funcionam mais pois desvinculou o elemento
            //p = $("p").remove();

            //mas se usar o detach os efeitos de click funcionam, pois o detach remove mas nao desvincula os elementos
            p = $("p").detach();
        }
    });

    //Substituindo o elemento
    var href = $(".e").text();
    $(".e").replaceWith("<p><a href='https://"+href+"' target='_blank'>"+href+"</a></p>");

    //Substitui o texto em todos
    $("<p>#Bora Programar!</p>").replaceAll("p");

})