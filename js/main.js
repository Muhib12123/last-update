$(function (){

    $(".pro-box span").each(function () {

        $(this).animate({

            'width': $(this).data("width")

        }, 1000);

    });

})

