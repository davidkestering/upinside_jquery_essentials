//FORMA PADRAO DE INICIAR
/*$(document).ready(function(){
    $(".jquery_essentials").html("Jquery Iniciado!");
});*/

//FORMA SIMPLIFICADA
$(function () {
    $(".jquery_essentials").html("Jquery Iniciado com Gatilho!");
});

//CARREGANDO ANTES DE OUTRA BIBLIOTECA
/*
jQuery(function () {
    $(".jquery_essentials").html("Jquery antes de outra Biblioteca!");
});*/

//CARREGANDO DEPOIS DE OUTRA BIBLIOTECA
/*
var $j = jQuery.noConflict();
$j(document).ready(function () {
    $j(".jquery_essentials").html("Jquery depois de outra Biblioteca!");
});*/
