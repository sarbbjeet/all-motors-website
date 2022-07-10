"use strict";

$(document).ready(function () {

    //############ tooltip
    $("body").tooltip({selector: '[data-toggle=tooltip]'});
    $("body").popover({selector: '[data-toggle=popover]', trigger: 'hover'});




    //############ Action Link
    $('html').on('click', '.j_confirm_url', function () {

        let title, icon, url, textGo;

        title = $(this).attr("data-title");
        icon = $(this).attr("data-icon");
        url = $(this).attr("data-url");
        textGo = $(this).attr("data-textGo");

        showConfirmUrl(title, icon, url, textGo);
    });





    //############ Functions
    function showConfirmUrl(title, icon, url, textGo) {
        swal({
            title: title,
            icon: icon, // warning, error, success, info
            buttons: ['Cancel', textGo],
            dangerMode: true
        })
            .then((value) => {
            if (value) {
                window.location.href = url;
            }
        });
    }

});



