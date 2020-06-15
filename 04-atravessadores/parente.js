$(function () {
    $(".article").children().css("font-family","Open Sans, serif");
    $(".article").children(".article_content").css("margin-botton","30px");
    $(".article_content").children("p").css("font-size","0.8em");

    //irmaos
    $(".article_content p").siblings().css("color","#777");
    $(".article_content p").siblings(".a").css("color","#09f");

    $(".article_content b").parent().css({
        padding: "10px",
        background: "#fbfbfb"
    }).parent("div").css({
        "padding-bottom":"15px",
        "border-bottom":"5px solid #eee"
    });

    $("p").on("click",function () {
        //console.log($(this).parents("body"));
        //$(this).parents().toggleClass("active");
        $(this).parents("body").toggleClass("active");

        var data = new Date();
        $(".date").remove();
        $(this).parents("div:last").append("<div class='date'>"+data.getUTCDate()+"/"+data.getUTCMonth()+"/"+data.getFullYear()+"</div>");

        console.log($(this).parents());
        console.log($(this).closest(".article")); //vai ate o elemento mais proximo do delimitador

        $("b").closest("p").css("border-top","1px solid #09f");
    });

    console.log("UNTIL");
    console.log($(".a").parents(".article"));//volta até
    console.log($(".a").parentsUntil(".article"));//parentes de article [EL, ]
    console.log($(".a").parentsUntil("body","article"));//parentes de article [EL, FILTRO]
});
