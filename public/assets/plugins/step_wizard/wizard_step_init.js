"use strict";
$(document).ready(function () {
  //############ Form Wizard
  if ($("#wizard_form").length) {
    var form = $("#wizard_form");
    form.validate({
      rules: {
        property_title: {
          required: true,
          minlength: 5,
        },
      },
      messages: {
        property_title: "Enter a valid title",
        property_finality: "What is the purpose?",
        property_type: "What's the type?",
        property_builtarea: "Enter the area",
        property_totalarea: "Enter the total area",
        property_bedrooms: "How many dorms?",
        property_apartments: "How many suites?",
        property_bathrooms: "How many bathrooms?",
        property_parkings: "How many parking spaces?",
        property_transaction: "Enter the type of transaction",
        property_state: "Enter the State",
        property_city: "Enter the City",
        property_district: "Enter the Neighborhood",
        property_country: "Enter the country",
        property_date: "Enter the date of publication",
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
      },
    });

    form.steps({
      headerTag: "h6",
      bodyTag: "section",
      transitionEffect: "fade",
      titleTemplate:
        '<span class="step" data-toggle="tooltip" title="#title#">#index#</span><span class="step_title">#title#</span>',
      labels: {
        next: "Next",
        previous: "Previous",
      },
      onStepChanging: function (event, currentIndex, newIndex) {
        form.validate().settings.ignore = ":disabled,:hidden";
        return form.valid();
      },
      onFinishing: function (event, currentIndex) {
        form.validate().settings.ignore = ":disabled";
        return form.valid();
      },
      onFinished: function (event, currentIndex) {
        alert("Submitted!");
      },
    });
  }
});
