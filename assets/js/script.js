//for hamburger
var burger = document.querySelector('.burger');
var navLink = document.querySelector('.nav-links');
var navicons = document.querySelector('.nav-icons');
burger.addEventListener('click', function(){
    navLink.classList.toggle('nav-active');
    burger.classList.toggle('burger-active');
    document.querySelector('html').classList.toggle('no-scroll');
});


var tabItems = document.querySelectorAll('.tab-item');
var tabContentItems = document.querySelectorAll('.tab-content-item');

function setContentItem(e){
    removerColor()
    removeActive();
     this.classList.add('active');
    var tabContentItem = document.querySelector(`#${this.id}-content`);
    tabContentItem.classList.add('active');
}

tabItems.forEach(function (item){
    item.addEventListener('click', setContentItem);
});

function removerColor() {
    tabItems.forEach(function(item){
        item.classList.remove('tab-color');
    })
}

function removeActive(){
    tabContentItems.forEach(function (item){
        item.classList.remove('active');
    });
}





// //sticky navigation
// $(document).ready(function () {
//     $(window).scroll(function () {   //  when your window scrolled.
//         var height = $(window).scrollTop();  //getting the scrolling height of window
//         if (height > 100) {
//             $("header").css({ "position": "fixed" });
//         } else {
//             $("header").css({ "position": "relative" });
//         }
//     });
// });


// for slider
$(document).ready(function () {
    $('.main-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
    });
})

//tab functionality
// $(document).ready(function () {
//     $('.dicovery-tabs').on("click", "li", function () {
//         var tabsId = $(this).attr('id');
//         $(this).addClass('active').siblings().removeClass('active');
//         $('#' + tabsId + "-content").addClass('active').siblings().removeClass('active');
//     });
// });

//for counter
$('.test').counterUp({
    delay: 8,
    time: 1000
});

// for post -slider
$(document).ready(function () {
    $('.posts').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows: false,
        // Responsive carousel
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: false,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});

//gallery slider
$(document).ready(function () {
    $('.gallery').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 2,
        arrows: false,
        // Responsive carousel
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    infinite: false,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    });
});

// for back-to-top
$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop > 100) {
            $('.back-to-top').addClass('show');
        } else {
            $('.back-to-top').removeClass('remove');
        }
    });

    $('.back-to-top').on("click", function () {
        $('html, body').animate({
            scrollTop: 0
        }, 'slow');
    });
});