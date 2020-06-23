$(function () {
    var content = "<div>Opa, estamos aprendendo jQuery <p class='j_close button'>Remover</p></div>";

    //ON
    $(".j_button").on("click",function (event) {
        //console.log(event);
        $(content).prependTo("body");
    });

    //NAO VAI FUNCIONAR POIS NAO EXISTE AINDA PARA SER MONITORADO
    /*$(".j_close").on("click",function () {
        console.log("Remover");
    });*/

    //AGORA VAI FUNCIONAR POIS A MONITORACAO OCORRE NO ELEMENTO PAI
    $("body").on("click",".j_close",function () {
        //console.log("Remover");
        $(this).parent().remove();
    });

    //MONITORANDO DOIS TIPOS DE EVENTOS DE MOUSE
    $("body").on("click mouseleave",".j_close",{text: "<p class='clear'>Removido</p>"},function (e) {
        $("body").prepend(e.data.text);
        $(this).parent("div").remove();
    });

    //PRIMEIRA VEZ
    $(".j_button").one("click",function () {
        console.log("Primeiro Click");
    });

    //CLICK REALIZADO PELO JQUERY, SERVE PARA DISPARAR QUALQUER TIPO DE EVENTO NO JQUERY - TRIGGER
    /*$(".j_button").on("click",function () {
        //$(this).trigger("click");
    });*/

    //namespaces
    $(".j_button").on("jQ.remove",function () {
        $(".clear").remove();
        console.log("jQ.remove executado!");
    }).on("click",function () {
        var cc = $(".clear").length;
        if(cc >= 1){
            $(this).trigger("jQ.remove");
        }
    });


    $("div p").click(function () {
        console.log("CLICK");

        var input = $(this).parent().find("input");
        input.focus(function () {
            console.log("FOCUSED");
        });
        //AQUI ELE FOCA NO INPUT
        //input.trigger("focus");

        //AQUI ELE APENAS AVISA QUE O CURSOR FOCOU MAS NAO APARECERA CURSOR PISCANDO
        input.triggerHandler("focus");

        //PARA DE AVISAR SOBRE O FOCO NO HANDLER
        input.off("focus");
        $(this).off("click").on("click",function () {
            console.warn("Outro CLICK");
        })
    });
});
