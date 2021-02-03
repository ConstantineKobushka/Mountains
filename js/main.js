$(function () {
  $(".header__slider").slick({
    arrows: false,
    dots: true,
    fade: true,
  });

  $(".tours__slider").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow:
      '<button class="slick-arrow slick-next"><img src="images/arrow-next.png" alt="next arrow"></button>',
    prevArrow:
      '<button class="slick-arrow slick-prev"><img src="images/arrow-prev.png" alt="prev arrow"></button>',
    responsive: [
      {
        breakpoint: 1230,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 785,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 681,
        settings: {
          arrows: false,
          slidesToShow: 1,
          dots: true,
        },
      },
    ],
  });

  $(".list__slider").slick({
    nextArrow:
      '<button class="slick-arrow slick-next"><img src="images/arrow-next.png" alt="next arrow"></button>',
    prevArrow:
      '<button class="slick-arrow slick-prev"><img src="images/arrow-prev.png" alt="prev arrow"></button>',
    responsive: [
      {
        breakpoint: 681,
        settings: {
          arrows: false,
          dots: true,
        },
      },
    ],
  });

  $(".header__menu-btn").on("click", function () {
    $(".header__menu-list").toggle("slow");
    $(".header__menu-btn").toggleClass("active");
  });

  $(".blog__news-item").on("click", function (e) {
    e.preventDefault();

    $($(this).siblings()).removeClass("blog__news-item--active");
    // $(".tabs-content").removeClass("tabs-content--active");
    $($(this).closest(".blog__news").siblings().find("div")).removeClass(
      "blog__descr-item--active"
    );

    $(this).addClass("blog__news-item--active");
    $($(this).attr("href")).addClass("blog__descr-item--active");
  });
});

// $(".tab").on("click", function (e) {
//   e.preventDefault();

//   $($(this).siblings()).removeClass("tab--active");
//   // $(".tabs-content").removeClass("tabs-content--active");
//   $($(this).closest(".card__tab-box").siblings().find("div")).removeClass(
//     "tabs-content--active"
//   );

//   $(this).addClass("tab--active");
//   $($(this).attr("href")).addClass("tabs-content--active");
// });
