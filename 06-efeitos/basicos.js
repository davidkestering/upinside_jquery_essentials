$(function () {
    var btn = $(".button");
    var timeEffect = 600;

    btn.on("click",function (e) {
        e.preventDefault();

        $(".hide").stop().hide(timeEffect,function () {
            //executa quando o efeito concluir
        });

        $(".show").stop().show(timeEffect,function () {
            //executa quando o efeito concluir
            console.log("OK");
        });

        $(".toggle").stop().toggle(timeEffect,function () {
            //executa quando o efeito concluir
        });
    });
});
