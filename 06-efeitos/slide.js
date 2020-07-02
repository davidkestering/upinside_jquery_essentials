$(function () {
    var speed = 1000;

    $(".expand").on("click",function () {
        $(".slide_content").stop().slideDown(speed,function () {
            //Executa quando completar a acao
        });
    });

    $(".close").on("click",function () {
        $(".slide_content").stop().slideUp(speed,function () {
            //Executa quando completar a acao
        });
    });

    $(".toggle").on("click",function () {
        $(".slide_content").stop().slideToggle(speed,function () {
            //Executa quando completar a acao
        });
    })

    $(".slide h4").on("click",function (e) {
        //para cada um
        //$(this).parent().find(".slide_content").slideToggle();

        //somente um aberto
        $(".slide_content").stop().slideUp(speed);
        $(this).parent().find(".slide_content").slideToggle();
    });
});
