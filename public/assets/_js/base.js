import $ from "jquery";

$(document).ready(function () {
  //################################# MENU SUSPENSO
  $(window).scroll(function () {
    if ($(this).scrollTop() > $(".main_header").outerHeight()) {
      $(".main_header .header_bottom").addClass("position-fixed");
      $(".main_header .header_bottom").addClass("py-md-2");
    } else {
      $(".main_header .header_bottom").removeClass("position-fixed");
      $(".main_header .header_bottom").addClass("py-md-2");
    }
  });

  //################################# MENU
  $("html").on("click", ".nav-icon.menu_action", function () {
    $(".menu_mobile_box").toggleClass("active");
    $(".main_nav_mobile").toggleClass("active");
    $(".nav-icon").toggleClass("open");
  });

  $(".menu_mobile_box").click(function (e) {
    if (e.target === this) {
      $(".menu_mobile_box").toggleClass("active");
      $(".main_nav_mobile").toggleClass("active");
      $(".nav-icon").toggleClass("open");
      return false;
    }
  });

  //FECHA MENU COM A TECLA ESC
  $(document).keydown(function (e) {
    if (e.which === 27) {
      if ($(".nav-icon").hasClass("open")) {
        $(".nav-icon").removeClass("open");
      }

      if ($(".menu_mobile_box").hasClass("active")) {
        $(".menu_mobile_box").removeClass("active");
      }

      if ($(".main_nav_mobile").hasClass("active")) {
        $(".main_nav_mobile").removeClass("active");
      }

      if ($(".modal_item").hasClass("active")) {
        $(".modal_item").removeClass("active");
      }

      if ($(".compare_box").hasClass("active")) {
        $(".compare_box").removeClass("active");
      }

      if ($(".compare_sidebar").hasClass("active")) {
        $(".compare_sidebar").removeClass("active");
      }
    }
  });
});

// $(function () {
//   $('[data-toggle="tooltip"]').tooltip();
// });
