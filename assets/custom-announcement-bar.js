$(document).ready(function () {
  $(".announcement-content").slick({
    dots: false,
    arrows: true,
    infinite: true,
    speed: 700,
    vertical: true,
    verticalSwiping: true,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});
