$(document).ready(function () {
    $('html').on('submit', 'form.formContact', function (e) {
        e.preventDefault();
        e.stopPropagation();


        var form = $(this);
        form.validate({
            rules: {
                email: {
                    required: true,
                    email: true
                },
                name: {
                    required: true,
                    minlength: 5
                },
                subject: {
                    required: true,
                    minlength: 5
                },
                message: {
                    required: true,
                    minlength: 5
                }
            },
            messages: {
                email: {
                    required: "Please, enter your email",
                    email: "Invalid email format"
                },
                name: {
                    required: "Please enter the name.",
                    minlength: "Your name must be at least 5 characters"
                },
                subject: {
                    required: "Please enter the Subject."
                },
                message: {
                    required: "Please enter the message.",
                    minlength: "Your name must be at least 10 characters"
                }
            },
            errorPlacement: function (error, element) {
                error.addClass("invalid-feedback");
                error.insertAfter(element);
            },
            highlight: function (element, errorClass, validClass) {
                $(element).addClass("is-invalid").removeClass("is-valid");
            },
            unhighlight: function (element, errorClass, validClass) {
                $(element).removeClass("is-invalid");
            }

        });


        if (form.valid()) {
            form.find('.form_load').fadeIn('slow');

            let data = form.serialize();


            $.post('sendMail/sendMail.ajax.php', data, function (dataReturn) {
                form.find('.form_load').fadeOut('fast', function () {
                    if (dataReturn.trigger) {
                        $('.return').html("<div class='alert alert-" + dataReturn.trigger[0] + " my-3' role='alert'>" + dataReturn.trigger[1] + " <strong>" + dataReturn.trigger[2] + "</strong> <button type='button' class='close' data-dismiss='alert' aria-label='Close'><span aria-hidden='true'>×</span></button><br>" + dataReturn.trigger[3] + "</div>");
                    }

                    if (dataReturn.clearform) {
                        form.find("input, textarea").each(function () {
                            $(this).val("");
                        });
                    }
                });
            }, 'json');
        }

    });
});