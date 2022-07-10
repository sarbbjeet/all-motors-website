$(document).ready(function () {

    if ($('form').length) {

        //#################################### Upload Single Image
        $('html').on('change', '.j_loadimage', function () {
            var input, target, fileDefault, typeImage;

            input = $(this);
            target = $('.' + input.attr('name'));
            fileDefault = target.data('default');
            typeImage = target.attr('src');

            if (!input.val()) {
                target.fadeOut('fast', function () {
                    $(this).css('background-image', 'url(' + fileDefault + ')').fadeIn('slow');
                });
                return false;
            }

            if (this.files && (this.files[0].type.match("image/jpeg") || this.files[0].type.match("image/png") || this.files[0].type.match("image/jpeg"))) {
                var reader = new FileReader();
                reader.onload = function (e) {
                    target.fadeOut('fast', function () {
                        if (Boolean(typeImage)) {
                            $(this).attr('src', e.target.result).fadeIn('fast');
                        } else {
                            $(this).css('background-image', 'url(' + e.target.result + ')').fadeIn('fast');
                        }
                    });
                };
                reader.readAsDataURL(this.files[0]);
            } else {
                showNotification('danger', '<i class="fas fa-ban"></i>', 'Failed to load the image!', 'Talk to your system administrator');
                target.fadeOut('fast', function () {
                    $(this).css('background-image', 'url(' + fileDefault + ')').fadeIn('slow');
                });
                input.val('');
                return false;
            }
        });



        //NEW LINE ACTION
        $('textarea').keypress(function (event) {
            if (event.which === 13) {
                let s = $(this).val();
                $(this).val(s + "\n");
            }
        });


        //clear address
        $('html').on('click', '.j_clearAddr', function () {
            $('.content_address').find('input').val('').removeClass('is-valid');
        });



        $('html').on('submit', 'form', function (e) {
            e.preventDefault();
            e.stopPropagation();

            form = $(this);

            form.find('.form_load').fadeIn('fast', function () {
                setTimeout(function () {
                    form.find('.form_load').fadeOut('slow');
                }, 1000);
            });
        });
    }

    if ($("form[name='user_profile']").length) {
        var form = $("form[name='user_profile']");
        form.validate({
            rules: {
                user_name: {
                    required: true,
                    minlength: 3
                },
                user_lastname: {
                    required: true,
                    minlength: 3
                }
            },
            messages: {
                user_name: "Enter the First Name",
                user_lastname: "Enter the Last Name"
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
    }

    if ($("form[name='user_manager_contact']").length) {
        var form = $("form[name='user_manager_contact']");
        form.validate({
            rules: {
                user_email: {
                    required: true,
                    email: true
                }
            },
            messages: {
                user_email: {
                    required: "Enter the e-mail",
                    email: "Invalid email format"
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
    }

    if ($("form[name='user_add_address']").length) {
        var form = $("form[name='user_add_address']");
        form.validate({
            rules: {
                addr_zipcode: {
                    required: true,
                    minlength: 3
                }
            },
            messages: {
                addr_zipcode: {
                    required: "Inform the zip code",
                    email: "Invalid Zip code"
                },
                addr_street: "Inform the Street",
                addr_city: "Inform the City",
                addr_state: "Inform the State",
                addr_country: "Inform the Country"
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
    }

    if ($("form[name='user_up_password']").length) {
        var form = $("form[name='user_up_password']");
        form.validate({
            rules: {
                user_password: {
                    required: true,
                    minlength: 5
                },
                user_password_re: {
                    required: true,
                    minlength: 5,
                    equalTo: "#user_password"
                }
            },
            messages: {
                user_password: {
                    required: "Please enter the password.",
                    minlength: "Your password must be at least 5 characters"
                },
                user_password_re: {
                    required: "Please repeat your password",
                    minlength: "ur password must be at least 5 characters",
                    equalTo: "Repeat the new password correctly"
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
    }



    //#################################### Functions

    function showNotification(type, Icon = null, Title, Content) {
        $.notify({
            title: '<strong>' + Icon + ' ' + Title + '</strong><br>',
            message: Content
        }, {
            type: type, //success, warning, danger, info
            delay: 3000,
            timer: 1000
        });
    }

});



