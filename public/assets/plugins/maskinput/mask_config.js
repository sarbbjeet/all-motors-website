$(document).ready(function () {

    if ($('.formCurrency').length) {  
        $(".formCurrency").mask('#.##0.00', {reverse: true});
    }


    if ($('.formDate').length) {  
        $(".formDate").mask("9999/99/99");
    }


    if ($('.formTime').length) {  
        $(".formTime").mask("9999/99/99 99:99");
    }


    if ($("input[type='tel']").length) {  
        $("input[type='tel']").focusout(function () {
            var phone, element;
            element = $(this);
            element.unmask();
            phone = element.val().replace(/\D/g, '');
            if (phone.length > 10) {
                element.mask("(99) 99999-9999");
            } else {
                element.mask("(99) 9999-99999");
            }
        }).trigger('focusout');
    }

});