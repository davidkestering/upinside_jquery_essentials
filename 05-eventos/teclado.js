$(function () {
    var input = $("input");
    var textarea = $("textarea");

    input.keypress(function (e) {
        console.log("PRESS: "+e.which);
    }).keydown(function (e) {
        console.log("DOWN: "+e.which);
        console.log(e.metaKey);

        //METAKEY eh o command do mac ou tecla windows no windows
        /*if(e.metaKey){
            if(e.which === 85){
                alert("UpInside!");
            }
        }*/

        if(e.metaKey){
            if(e.which === 74){
                alert("UpInside!");
            }
        }

    }).keyup(function (e) {
        console.log("UP");


        /*if(e.which === 85){
            alert("UpInside!");
        }*/
    });

    $("input").on("keyup",function (e) {
        var input = $(this);
        //input.val(input.val().toUpperCase()); --cuidado tem um bug no cursor

        if(!$(".result").find("h1").length){
            $(".result").prepend("<h1>"+input.val().toUpperCase()+"</h1>");
        }else{
            $(".result h1").text(input.val().toUpperCase());
        }
    });

    $("textarea").on("keyup",function (e) {
        var textarea = $(this);

        if(!$(".result").find("div").length){
            $(".result").append("<div><p>"+textarea.val()+"</p></div>");
        }else{
            $(".result div").html("<p>" + textarea.val().replace(/\n/g,"</p><p>") + "</p>");
        }
    });

    $(window).resize(function (e) {
        console.log($(this).outerWidth(), e);
    });

    $("body").height(1500);

    $(window).scroll(function (event) {
        console.log("SCROLL TOP: "+$(this).scrollTop());
        console.log(event);
    });
});
