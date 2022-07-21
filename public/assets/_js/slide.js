import $ from "jquery";
const lightbox = require("../plugins/lightbox/lightbox.min.js");

$(function () {
  //slide
  if ($(".slide_detach").length) {
    $(".slide_detach").slick({
      autoplay: true,
      arrows: false,
      dots: true,
      speed: 500,
      autoplaySpeed: 4000,
    });
  }

  //slide single
  if ($(".slide_single").length) {
    $(".slide_single").slick({
      autoplay: true,
      arrows: true,
      dots: false,
      speed: 500,
      autoplaySpeed: 4000,
    });
  }

  if ($(".slide_single_dots").length) {
    $(".slide_single_dots").slick({
      autoplay: true,
      arrows: true,
      dots: true,
      speed: 500,
      autoplaySpeed: 4000,
    });
  }

  if ($(".slide_two").length) {
    $(".slide_two").slick({
      slidesToShow: 2,
      infinite: true,
      arrows: true,
      autoplay: true,
      autoplaySpeed: 4000,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            arrows: false,
            slidesToShow: 1,
          },
        },
      ],
    });
  }

  if ($(".slide_three").length) {
    $(".slide_three").slick({
      slidesToShow: 3,
      infinite: true,
      arrows: true,
      autoplay: true,
      responsive: [
        {
          breakpoint: 960,
          settings: {
            arrows: true,
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 640,
          settings: {
            arrows: false,
            slidesToShow: 1,
          },
        },
      ],
    });

    $(".slide_three").removeClass("d-none");
  }

  if ($(".slide_four").length) {
    $(".slide_four").slick({
      slidesToShow: 4,
      infinite: true,
      arrows: true,
      autoplay: true,
      responsive: [
        {
          breakpoint: 1280,
          settings: {
            arrows: false,
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 960,
          settings: {
            arrows: false,
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 640,
          settings: {
            arrows: false,
            slidesToShow: 1,
          },
        },
      ],
    });

    $(".slide_four").removeClass("d-none");
  }

  if ($(".slide_six").length) {
    $(".slide_six").slick({
      slidesToShow: 6,
      infinite: true,
      arrows: true,
      autoplay: true,
      responsive: [
        {
          breakpoint: 1280,
          settings: {
            arrows: false,
            slidesToShow: 5,
          },
        },
        {
          breakpoint: 960,
          settings: {
            arrows: false,
            slidesToShow: 4,
          },
        },
        {
          breakpoint: 640,
          settings: {
            arrows: false,
            slidesToShow: 2,
          },
        },
      ],
    });

    $(".slide_six").removeClass("d-none");
  }

  if ($(".slider-for").length) {
    $(".slider-for").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      fade: false,
      adaptiveHeight: true,
      asNavFor: ".slider-nav",
      responsive: [
        {
          breakpoint: 840,
          settings: {
            arrows: false,
          },
        },
      ],
    });

    $(".slider-for").removeClass("d-none");
  }

  if ($(".slider-nav").length) {
    $(".slider-nav").slick({
      centerPadding: 0,
      slidesToShow: 7,
      slidesToScroll: 1,
      asNavFor: ".slider-for",
      dots: true,
      centerMode: false,
      focusOnSelect: true,
      responsive: [
        {
          breakpoint: 1280,
          settings: {
            slidesToShow: 5,
          },
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 4,
          },
        },
        {
          breakpoint: 940,
          settings: {
            slidesToShow: 5,
          },
        },
        {
          breakpoint: 840,
          settings: {
            slidesToShow: 4,
          },
        },
        {
          breakpoint: 640,
          settings: {
            slidesToShow: 3,
          },
        },
      ],
    });

    $(".slider-nav").removeClass("d-none");
  }

  if ($("[data-lightbox]").length) {
    lightbox.option({
      resizeDuration: 200,
      fadeDuration: 350,
      imageFadeDuration: 350,
      wrapAround: true,
      showImageNumberLabel: false,
      disableScrolling: true,
    });
  }
});
