$(function () {
    $('html').on('click', '.j_share', function () {
        $(this).toggleClass('active');
    });


    $('.socialshare_item.rel').click(function () {
        var url = $(this).attr('href');
        var width = 600;
        var height = 400;

        var leftPosition, topPosition;
        leftPosition = (window.screen.width / 2) - ((width / 2) + 10);
        topPosition = (window.screen.height / 2) - ((height / 2) + 100);
        window.open(url, "Window2",
                "status=no,height=" + height + ",width=" + width + ",resizable=yes,left="
                + leftPosition + ",top=" + topPosition + ",screenX=" + leftPosition + ",screenY="
                + topPosition + ",toolbar=no,menubar=no,scrollbars=no,location=no,directories=no");
        return false;
    });

    //GET FACEBOOK SHARE
    if ($(".socialshare_facebook").length) {
        $.getJSON("https://graph.facebook.com/?id=" + $('.socialshare_facebook').attr('data-rel'));
    }

});