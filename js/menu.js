// show hide navigation menu
$("#navbarOpener").click(() => {
  $(".navbar-menu").removeClass("d-none");
  $("body").addClass("overflow-hidden");
});
$("#navbarCloser").click(() => {
  $(".navbar-menu").addClass("d-none");
  $("body").removeClass("overflow-hidden");
});

$(".nav-link").click(() => {
  $(".navbar-menu").addClass("d-none");
  $("body").removeClass("overflow-hidden");
});

// menu buttons slider
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1.5,
  spaceBetween: 10,
  grabCursor: true,
  // loop: true,
});

// menu filter List

$(".btn-menu").click(function () {
  let menuNum = $(this).attr("data-menu");
  console.log(menuNum);
  console.log(this);
  //  activate button
  $(".btn-menu").removeClass("active");
  $(this).addClass("active");
  // hide all menu list
  $(".menu-list").hide();
  $(`.menu-list-${menuNum}`).show();
});

// show hide menu btn
$(window).scroll(function () {
  if (window.scrollY > 90) {
    $(".menu-btn").removeClass("d-none");
  } else {
    $(".menu-btn").addClass("d-none");
  }
});
