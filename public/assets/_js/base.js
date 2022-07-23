import $ from "jquery";

$(document).ready(function () {
  //################################# MENU SUSPENSO
  // $(window).scroll(function () {
  //   if ($(this).scrollTop() > $(".main_header").outerHeight()) {
  //     $(".main_header .header_bottom").addClass("position-fixed");
  //     $(".main_header .header_bottom").addClass("py-md-2");
  //   } else {
  //     $(".main_header .header_bottom").removeClass("position-fixed");
  //     $(".main_header .header_bottom").addClass("py-md-2");
  //   }
  // });

  //################################# MENU

  // document.querySelector(".menu_action").addEventListener("click", (e) => {

  //     document.querySelector(".menu_mobile_box").classList.toggle("active");
  //     document.querySelector(".main_nav_mobile").classList.toggle("active");
  //     document.querySelector(".nav-icon").classList.toggle("open");

  // });

  $("html").on("click", ".nav-icon.menu_action", function () {
    $(".menu_mobile_box").toggleClass("active");
    $(".main_nav_mobile").toggleClass("active");
    $(".nav-icon").toggleClass("open");
  });

  //document.querySelector(".menu_mobile_box").addEventListener("click", (e) => {
  $(".menu_mobile_box").click(function (e) {
    if (e.target === this) {
      $(".menu_mobile_box").toggleClass("active");
      $(".main_nav_mobile").toggleClass("active");
      $(".nav-icon").toggleClass("open");
      return false;
    }
  });

  const closeMenu = () => {
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
  };

  //close menu after clicking navigator link
  const routes = document.querySelectorAll(".nav-click");
  routes.forEach((route) => route.addEventListener("click", () => closeMenu()));
  // document.addEventListener("click", (e) => {
  //   if (e.classList?.contains("nav-click")) closeMenu();
  // });

  // document.querySelector("#nav-click")?.addEventListener("click", () => {
  //   closeMenu();
  // });

  //FECHA MENU COM A TECLA ESC
  document.addEventListener("keydown", (e) => {
    if (e.defaultPrevented) return; // Do nothing if event already handled

    if (e.code == "Escape") closeMenu();
  });
});

// $(function () {
//   $('[data-toggle="tooltip"]').tooltip();
// });
