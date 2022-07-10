import $ from "jquery";
$(document).ready(function () {
  //################################# Compare
  $("html").on("click", ".j_compare", function () {
    $(this).toggleClass("active");
  });

  $("html").on("click", ".j_compareSidebar", function (e) {
    $(".compare_box").toggleClass("active");
    $(".compare_sidebar").toggleClass("active");
  });

  $(".compare_box").click(function (e) {
    if (e.target === this) {
      $(".compare_box").toggleClass("active");
      $(".compare_sidebar").toggleClass("active");
      return false;
    }
  });
});
