$(function () {
    //IS
    $("p").on("click", function () {
        console.clear();

        if($(this).is(".j")){
            console.log("TRUE");
        }else{
            console.log("FALSE");
        }

        if($(this).is(":first-of-type")){
            console.log("FIRST");
        }
    });

    //possui HAS
    $("p").has("span").append("<sup>Has SPAN</sup>");

    //nao possui NOT
    $("p").not(":contains('jQuery')").css("color","red");
    $("p").not(":eq(2)").css("border","1px solid red");

    //FILTER
    $("p").filter(":contains('jQuery')").css({
        color: "red",
        border: "1px solid red"
    });

    $("p").css({
        padding: "10px",
        background: "#eee"
    }).filter(function (index) {
        return index%2===1;
    }).css("background","#ccc");

    //MAP, com apenas o get, sem o join, será separado por virgula automaticamente
    var mapa = $("p").map(function (indice, elemento) {
        console.log(elemento);
        return "<p>"+ indice +" - "+ $(elemento).text() +"</p>";
    }).get().join("");

    $("<div>"+mapa+"</div>").appendTo("body");
});
