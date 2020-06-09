$(function () {
    console.group("W");
    console.log($("div:first").width());
    console.log($("div:first").innerWidth());
    console.log($("div:first").outerWidth());
    console.groupEnd();

    console.group("H");
    console.log($("div:first").height());
    console.log($("div:first").innerHeight());
    console.log($("div:first").outerHeight());
    console.groupEnd();

    //$("div").css("float","left").width("50%");
    $("div").css("float","left").outerWidth("50%");

    //buscar elemento com maior altura para fazer todas as divs terem a mesma altura
    var h = 0;
    $("div").each(function (i, el) {
        $(el).outerHeight();
        if($(el).outerHeight() > h){
            h = $(el).outerHeight();
        }
    }).outerHeight(h);
})