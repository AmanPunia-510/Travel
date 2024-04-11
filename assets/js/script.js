const toggle = document.querySelector(".toggle");
const navbar_items = document.querySelector(".navbar-items");

toggle.addEventListener("click", () => {
  navbar_items.classList.toggle("show");
  let body = document.querySelector("body");
  if (navbar_items.classList.contains("show")) {
    body.style.position = "fixed";
    body.style.top = "0";
    body.style.left = "0";
    body.style.width = "100%";
  } else {
    body.style.position = "relative";
  }
});

$(".slider1").slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow: false,
  nextArrow: false,
//   autoplay: true,
//   autoplaySpeed: 1000,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 1000,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
      },
    },
  ],
});
