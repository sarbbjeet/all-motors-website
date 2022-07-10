/*
Sweetalert
Complete Docsin https://sweetalert.js.org/
*/

$(function () {

    $('html').on('click', '.j_sweetalert', function () {
        var type = $(this).data('type');
        if (type === 'basic') {
            showBasic();
        }
        else if (type === 'with-title') {
            showWithTitle();
        }
        else if (type === 'with-icon') {
            showIcon($(this).data('icon'), $(this).data('title'), $(this).data('text'), $(this).data('button'));
        }
        else if (type === 'html-message') {
            showHtml();
        }
        else if (type === 'autoclose-timer') {
            showAutoCloseTimer();
        }
        else if (type === 'interative') {
            showInterative();
        }
        else if (type === 'confirm') {
            showConfirm();
        }
        else if (type === 'multiple') {
            showMultiple();
        }
    });
});

//These codes takes from http://t4t5.github.io/sweetalert/
function showBasic() {
    swal("Here's a message!");
}

function showWithTitle() {
    swal("Here's the title!", "...and here's the text!");
}

function showInterative() {
    swal("Click on either the button or outside the modal.")
        .then((value) => {
        swal(`The returned value is: ${value}`);
    });
}

function showMultiple() {
    swal("A wild Pikachu appeared! What do you want to do?", {
        buttons: {
            cancel: "Run away!",
            catch: {
                text: "Throw Pokéball!",
                value: "catch",
            },
            defeat: true,
        },
    })
        .then((value) => {
        switch (value) {

            case "defeat":
                swal("Pikachu fainted! You gained 500 XP!");
                break;

            case "catch":
                swal("Gotcha!", "Pikachu was caught!", "success");
                break;

            default:
                swal("Got away safely!");
        }
    });
}

function showConfirm() {
    swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this imaginary file!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
    })
        .then((willDelete) => {
        if (willDelete) {
            swal("Poof! Your imaginary file has been deleted!", {
                icon: "success",
            });
        } else {
            swal("Your imaginary file is safe!");
        }
    });
}

function showIcon(icon = null, title, text, button) {
    icon = (icon !== null && icon !== '' && icon !== 'undefined') ? icon :  'success'; 
    title = (title !== null && title !== '' && title !== 'undefined') ? title :  'Good job!'; 
    text = (text !== null && text !== '' && text !== 'undefined') ? text :  'You clicked the button!'; 
    button = (button !== null && button !== '' && button !== 'undefined') ? button :  'OK'; 

    swal({
        title: icon,
        text: text,
        icon: icon,
        button: button,
    });

    //type: warning, error, success, info
}


function showHtml() {
    swal({
        title: "HTML <small>Title</small>!",
        text: "A custom <span style=\"color: #CC0000\">html<span> message.",
        html: true
    });
}

function showAutoCloseTimer() {
    swal({
        title: "Auto close alert!",
        text: "I will close in 2 seconds.",
        timer: 2000,
        showConfirmButton: false
    });
}


