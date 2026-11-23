$(document).ready(function () {
    /* ANIMACION DE INGRESO AL RECARGAR PAGINA */
    $("#formDocente").hide().fadeIn(800);
    /*ANIMACION AL TOCAR LOS CAMPOS PARA LLENAR*/
    $("input[type='text'], select").on("focus", function () {
        $(this)
            .addClass("campo-activo")
            .stop()
            .animate({ paddingLeft: "15px" }, 200);
    }).on("blur", function () {
        $(this)
            .removeClass("campo-activo")
            .stop()
            .animate({ paddingLeft: "5px" }, 200);
    });
     
});