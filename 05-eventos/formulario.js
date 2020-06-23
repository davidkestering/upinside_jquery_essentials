$(function () {
    var instruction = $(".result b");

    //FOCUS
    $("input").focus(function (e) {
        console.log("FOCUS");
    }).focusin(function (e) {
        instruction.text("Informe o "+$(this).attr("placeholder").replace(":",""));
    }).focusout(function (e) {
        if(!$(this).val()){
            instruction.text("Por favor, digite o título!");
        }
    }).change(function (e) {
        instruction.text($(this).val());
    });

    //BLUR - quando o foco eh retirado do elemento que previamente tinha o focus
    $("*").blur(function (e) {
        console.log("BLUR: "+this);
    }).focusout(function (e) {
        console.log("OUT: "+this);
    });

    //selecionar e copiar um texto
    $("*").select(function (e) {
        console.log(e);
    });

    $("input, textarea").focus(function (e) {
        $(this).select();
        document.execCommand("copy");
    });

    $("form").on("submit",function (e) {
        e.preventDefault();

        var form = $(this);
        var data = $(this).serialize();

        console.log(data);
        /*$.post("api.php",{data: data}, function (retorno) {

        });*/

        form.find("button").text(" Carregando...").attr("disabled","true");
    });

});
