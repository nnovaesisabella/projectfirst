$(document).ready(function () {


    //efeito fumaça
    $("header, .info").ripples({
        dropRadius: 25,
        perturbance: 0.2,
    });


    //botão toggler

    $('.navbar-toggler').click(function () {
        $('.navbar-toggler').toggleClass('change')
    })


    //Magnific Popup carrosel

    $('.parent-container').magnificPopup({

        delegate: 'a',
        type: 'image',

        gallery: {
            enabled: true
        }

    });

    // Slick Carrosel 

    $('.carrosel').slick({

        centerMode: true,
        mobileFirst: true,
        centerPadding: '60px',
        slidesToShow: 3,
        responsive: [

            {
                breakpoint: 768,
                settings: {

                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 3
                }
            },
            {

                breackpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1


                }

            }

        ]

    });



})

// imagens carrosel cozinha

$('.fotos-churrascaria').slick({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
});