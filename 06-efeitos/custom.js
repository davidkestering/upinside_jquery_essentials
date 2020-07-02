$(function () {
    $(".start").on("click",function (e) {
        e.preventDefault();

        /*$(".animate").animate({"top":500},1000)
                     .animate({"left":500},1000)
                     .animate({"top":0},1000)
                     .animate({"left":0},1000);*/

        //animar usando evento em filas
        //executa apos o evento anterior na fila terminar
        $(".animate").animate({"top":500},1000, function () {
            //executa depois que a animacao terminar
        })
            .queue(function () {
                $(this).css("background","red").dequeue();
            })
            .animate({"left":500},1000)
            .queue(function () {
                $(this).css("background","purple").dequeue();
            })
            .animate({"top":0},1000)
            .delay(2000) //faz esperar 2000 milisegundos
            .queue(function () {
                $(this).css("background","pink").dequeue();
            })
            .animate({"left":0},1000)
            .queue(function () {
                    $(this).css("background","#09f").dequeue();
            });

    });

    //sempre para o efeito atual
    $(".stop").on("click",function (e) {
        e.preventDefault();

        //$(".animate").stop();
        $(".animate").stop(true,true);
    });

    //limpa a fila
    $(".clear").on("click",function (e) {
        e.preventDefault();

        console.log($(".animate").queue());
        $(".animate").clearQueue();
        console.log($(".animate").queue());
    });

    $(".finish").on("click",function (e) {
        e.preventDefault();

        $(".animate").finish();
    });
});
