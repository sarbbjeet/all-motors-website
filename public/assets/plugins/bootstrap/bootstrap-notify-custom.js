/*
Bootstrap Notify
http://bootstrap-notify.remabledesigns.com/
*/
$(function () {
    $('html').on('click', '.j_notification', function () {
        let title = $(this).data('placement-title');
        let icon = $(this).data('placement-icon');
        let text = $(this).data('placement-text');
        let placementFrom = $(this).data('placement-from');
        let placementAlign = $(this).data('placement-align');
        let colorName = $(this).data('color-name');

        showNotification(title, icon, text, placementFrom, placementAlign, colorName);
    });
});

function showNotification(title = null, icon = null, text = null, placementFrom = null, placementAlign = null, colorName = null) {
    title = (title !== null && title !== '' && title !== 'undefined') ? title :  'Alerts'; 
    icon =  (icon !== null && icon !== '' && icon !== 'undefined') ? icon : 'fas fa-exclamation-triangle';
    colorName = (colorName !== null && colorName !== '' && colorName !== 'undefined') ? colorName : 'dark';
    text = (text !== null && text !== '' && text !== 'undefined') ? text : 'Turning standard Bootstrap alerts';
    placementFrom = (placementFrom !== null && placementFrom !== '' && placementFrom !== 'undefined') ? placementFrom : 'top';
    placementAlign = (placementAlign !== null && placementAlign !== '' && placementAlign !== 'undefined') ? placementAlign : 'right'; 
    let allowDismiss = true;

    $.notify({
        title: title,
        message: text
    }, {
        type: colorName, //primary, secondary, success, light, warning, danger, info, dark
        placement: {
            from: placementFrom,
            align: placementAlign
        },
        showProgressbar: true,
        icon_type: 'class',
        template: '<div data-notify="container" class="col-11 col-sm-8 col-md-6 col-lg-4 col-xl-3 alert alert-{0} align-items-center d-flex" role="alert">' +
        '<button type="button" aria-hidden="true" class="close" data-notify="dismiss">×</button>' +
        '<i class="'+ icon +' fa-3x mr-2"></i>' +
        '<span class="d-inline-block">' +
        '<b data-notify="title">{1}</b><br> ' +
        '<span data-notify="message">{2}</span>' +
        '</span>' +
        '<div class="progress position-absolute fixed-bottom" data-notify="progressbar" style="height: 4px; ">' +
        '<div class="progress-bar bg-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%; "></div>' +
        '</div>' +
        '<a href="{3}" target="{4}" data-notify="url"></a>' +
        '</div>' 
    });
}