$(document).ready(function () {

    //################################# MENU
    $('html').on('click', '.j_callFilter', function () {
        $('.j_callFilter').toggleClass('active');
        $('.advFilter_box').toggleClass('active');
        $('.advFilter').toggleClass('active');
    });


    $('.advFilter_box').click(function (e) {
        if (e.target === this) {
            $('.j_callFilter').toggleClass('active');
            $('.advFilter_box').toggleClass('active');
            $('.advFilter').toggleClass('active');
            return false;
        }
    });


    $('html').on('click', '.j_accAdvFilter', function () {
        $(this).toggleClass('active');
    });


    //Close MENU with TECLA ESC
    $(document).keydown(function (e) {
        if (e.which === 27) {
            $('.j_callFilter').toggleClass('active');

            if ($('.advFilter_box').hasClass('active')) {
                $('.advFilter_box').removeClass('active');
            }

            if ($('.advFilter').hasClass('active')) {
                $('.advFilter').removeClass('active');
            }
        }
    });


    $('html').on('click', '.j_reset', function () {
        location.reload();
    });

});