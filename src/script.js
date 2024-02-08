$(document).ready(function () {
  $("#landing-menu-carousel").slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    prevArrow:
      '<button type="button" class="slick-prev main__menu__carousel__button" aria-label="Previous items"><i class="ph ph-caret-circle-left"></i></button>',
    nextArrow:
      '<button type="button" class="slick-next main__menu__carousel__button" aria-label="Next items"><i class="ph ph-caret-circle-right"></i></button>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          dots: true,
        },
      },
      {
        breakpoint: 300,
        settings: "unslick", // destroys slick
      },
    ],
  });

  $("#landing-menu-ratings").slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    prevArrow:
      '<button type="button" class="slick-prev main__ratings__carousel__button"><i class="ph ph-caret-circle-left"></i></button>',
    nextArrow:
      '<button type="button" class="slick-next main__ratings__carousel__button"><i class="ph ph-caret-circle-right"></i></button>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          dots: true,
        },
      },
      {
        breakpoint: 300,
        settings: "unslick", // destroys slick
      },
    ],
  });

  const randomStarsSources = $(".main__ratings__carousel__item__stars");

  randomStarsSources.each(function () {
    const randomStars = Math.max(Math.floor(Math.random() * 5) + 1, 3);
    let stars = [];
    for (let i = 0; i < randomStars; i++) {
      stars.push(
        '<i class="ph-fill ph-star main__ratings__carousel__item__stars__star--selected"></i>'
      );
    }

    for (let i = 0; i < 5 - randomStars; i++) {
      stars.push(
        '<i class="ph-fill ph-star main__ratings__carousel__item__stars__star--unselected"></i>'
      );
    }

    $(this).html(stars);
  });
});
