$(function () {
    var el = $(".j");

    console.group("Offset");
    console.log(el.offset());
    console.log("TOP: "+el.offset().top);
    console.log("LEFT: "+el.offset().left);
    console.groupEnd();

    var el_off = el.offset();
    el.after("<p class='offset'>Cords: Top: "+el_off.top+" Left: "+el_off.left+"</p>");
    $(".offset").offset({
        top: el_off.top+30,
        left: el_off.left+10
    });


    console.group("Position");
    console.log(el.position());
    console.log("TOP: "+el.position().top);
    console.log("LEFT: "+el.position().left);
    console.groupEnd();

    //faz com que conteudo da pagina apenas apareça quando o scroll estiver em determinada posicao
    console.group("Scroll");
    $("body").outerWidth(3000).outerHeight(3000);
    $(window).scroll(function () {
        var el = $(this);
        console.log("TOP: "+el.scrollTop());
        console.log("LEFT: "+el.scrollLeft());
    });
    console.groupEnd();
})