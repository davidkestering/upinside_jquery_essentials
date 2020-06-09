$(function () {

    $("p").css("color","#006699");
    //multiplos atributos
    $("p").css({
        color:'#555'
        //"border-bottom":"1px solid #ccc"
    });

    //recuperando informacao dos atributos
    //console.log($(".segunda").attr("id"));
    $(".segunda").attr("id","segundo");

    //console.warn($(".segunda").prop("id"));
    //testar qual o valor do atributo
    console.warn($("input").prop("checked"));
    //testar se o atributo existe
    console.warn($("input").attr("checked"));
    //recuperar valor
    console.warn($("input").val());
    //reescrever um valor novo
    $("input").val("nome")
    console.warn($("input").val());


    //criar outro elemento ou replicar elemento
    //$(".segunda").clone().appendTo("body");
    //criar outro elemento e manipular
    $(".segunda").clone().appendTo("body").html("<b>#Bora Programar!</b>");

    //remover e adicionar
    $("div").on("click",function () {
        //nessa opcao temos como realizar validacoes e outros efeitos
        if($(this).hasClass("add")){
            $(this).removeClass("add");
            $(this).find("p").slideUp();
            //removeProp e removeAttr para remover propriedade e atributos
            $("input").removeAttr("checked");
        }else{
            $(this).addClass("add");
            $(this).find("p").slideDown();
            //adicionar atributos, primeiro elemento eh o nome, segundo elemento eh o valor
            $("input").attr("checked","checked");
        }

        //nessa opcao nao tem como fazer outras validacoes e efeitos
        //$(this).toggleClass("add");
    });


})