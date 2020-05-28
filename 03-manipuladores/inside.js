$(function () {
    //manipular texto de seletor
    //$(".j").text("#BoraProgramar!");

    //pegar texto de seletor e nao pega tags html
    var text = $(".j").text();
    $(".e").text(text);

    //pega text de seletor com as tags htmls
    var html = $(".j").html();
    $(".e").html(html);

    //adicionar texto ao final do elemento
    $(".e").append("<p>"+text+"</p>");

    //movendo conteudo de lugar mas sempre colocando depois do elemento
    $(".a").appendTo($(".e"));
    $("<p><b>#Bora Programar!</b></p>").appendTo($(".e"));

    //movendo conteudo de lugar mas sempre antes do elemento
    $(".e").prepend("<h2>Resultados!</h2>");
    $("<p>Exemplos:</p>").prependTo($(".e p:first"));


})