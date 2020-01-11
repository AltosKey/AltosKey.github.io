$(document).ready(function() {
$('.slide-0').slick({
centerMode: true,
slidesToShow: 3,
centerPadding: "0",
dots: true,
arrows: true,
appendDots: $(".slide-dots-0"),
prevArrow: $(".slide-prev-0"),
nextArrow: $(".slide-next-0"),
responsive: [
{
breakpoint: 768,
settings: {
centerMode: true,
slidesToShow: 3(document).ready(function ($) {
    $(".slide-0").slick({
        centerMode: true,
        slidesToShow: 3,
        centerPadding: "0",
        dots: true,
        arrows: true,
        appendDots: $(".slide-dots-0"),
        prevArrow: $(".slide-prev-0"),
        nextArrow: $(".slide-next-0"),
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    centerMode: true,
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    centerMode: true,
                    dots: false,
                    slidesToShow: 1
                }
            }
        ]
    });
    $(".slide-1").slick({
        centerMode: true,
        slidesToShow: 3,
        centerPadding: "0",
        dots: true,
        arrows: true,
        appendDots: $(".slide-dots-1"),
        prevArrow: $(".slide-prev-1"),
        nextArrow: $(".slide-next-1"),
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    centerMode: true,
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    centerMode: true,
                    dots: false,
                    slidesToShow: 1
                }
            }
        ]
    });
    $(".slide-2").slick({
        centerMode: true,
        slidesToShow: 3,
        centerPadding: "0",
        dots: true,
        arrows: true,
        appendDots: $(".slide-dots-2"),
        prevArrow: $(".slide-prev-2"),
        nextArrow: $(".slide-next-2"),
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    centerMode: true,
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    centerMode: true,
                    dots: false,
                    slidesToShow: 1
                }
            }
        ]
    });
    $(".slide-3").slick({
        centerMode: false,
        slidesToShow: 3,
        centerPadding: "0",
        dots: false,
        arrows: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    dots: false,
                    arrows: false,
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    dots: false,
                    arrows: true,
                    prevArrow: $(".slide-prev-3"),
                    nextArrow: $(".slide-next-3"),
                    slidesToShow: 1
                }
            }
        ]
    });
});
}
},
{
breakpoint: 480,
settings: {
centerMode: true,
dots: false,
slidesToShow: 1
}
}
]
});
$('.slide-1').slick({
centerMode: true,
slidesToShow: 3,
centerPadding: "0",
dots: true,
arrows: true,
appendDots: $(".slide-dots-1"),
prevArrow: $(".slide-prev-1"),
nextArrow: $(".slide-next-1"),
responsive: [
{
breakpoint: 768,
settings: {
centerMode: true,
slidesToShow: 3
}
},
{
breakpoint: 480,
settings: {
centerMode: true,
dots: false,
slidesToShow: 1
}
}
]
});
$('.slide-2').slick({
centerMode: true,
slidesToShow: 3,
centerPadding: "0",
dots: true,
arrows: true,
appendDots: $(".slide-dots-2"),
prevArrow: $(".slide-prev-2"),
nextArrow: $(".slide-next-2"),
responsive: [
{
breakpoint: 768,
settings: {
centerMode: true,
slidesToShow: 3
}
},
{
breakpoint: 480,
settings: {
centerMode: true,
dots: false,
slidesToShow: 1
}
}
]
});
$('.slide-3').slick({
centerMode: false,
slidesToShow: 3,
centerPadding: "0",
dots: false,
arrows: false,
responsive: [
{
breakpoint: 768,
settings: {
dots: false,
arrows: false,
slidesToShow: 3
}
},
{
breakpoint: 480,
settings: {
dots: false,
arrows: true,
prevArrow: $(".slide-prev-3"),
nextArrow: $(".slide-next-3"),
slidesToShow: 1
}
}
]
});
});