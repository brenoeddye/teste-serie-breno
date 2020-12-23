$(function() {
    $('.vitrine').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
        {
        breakpoint: 1171,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: true
            }
        },
        {
        breakpoint: 573,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        }
    ]
    });
});

$(function() {
    $('#b-cart').click(function() {
        $("#cart-buy").toggleClass("cart-hide").toggleClass("cart-items");
    });
    $('#cart-close').click(function() {
        $("#cart-buy").toggleClass("cart-items").toggleClass("cart-hide");
    });
    $('#back-buy').click(function() {
        $("#cart-buy").toggleClass("cart-items").toggleClass("cart-hide");
    });
    $('#mobile-menu').click(function() {
        $("div.menu").toggleClass("dropoff");
    });
    $('#dropdown-show').click(function() {
        $("#first-menu").toggleClass("dropoff").toggleClass("dropdown");
    });
    $('#subdropdown-show').click(function() {
        $("#second-menu").toggleClass("dropoff").toggleClass("sub-dropdown");
    });
    $('#mobile-login').click(function() {
        $("div.login-reg").toggleClass("dropoff");
    });
    $('#mobile-cart').click(function() {
        $("div.mobile-cartbuy").toggleClass("dropoff").toggleClass("cart-items");
    });
    $('.back-buy').click(function() {
        $("div.mobile-cartbuy").toggleClass("cart-items").toggleClass("dropoff");
    });
    $('#mobile-search').click(function() {
        $("#search-input").toggleClass("dropoff");
    });
});