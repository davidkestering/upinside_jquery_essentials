$(function () {
    //SELETOR DE ELEMENTO
    $("b").text("Jquery Essentials");
    //console.warn($("b")[0].offsetTop);
    //console.log($("b"));

    //SELETOR DE CLASSES
    $(".jquery").css("color","red");

    //SELETOR DE IDS
    $("#jquery").text("Id = jQuery");

    //SELETOR ALL
    //$("*").css("border","1px solid #ccc");
    $("div *").css("border","1px solid #ccc"); //somente os elementos filhos das divs

    //$("div, b").css("background","blue");

    /*$("div, b").css({
        background: "blue",
        color: "red",
        'border-radius':"4px",
        padding:"10px",
        "font-size":"1.4em"
    });*/

    $(".jquery, b").css({
        background: "blue",
        color: "red",
        'border-radius':"4px",
        padding:"10px",
        "font-size":"1.4em"
    });

    $("b").add("p").css("font-size","2em");
});