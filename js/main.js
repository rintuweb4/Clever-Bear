//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".fixed-top").addClass("top-nav-collapse");
        $(".navbar-brand img").addClass("smallimg");
    } else {
        $(".fixed-top").removeClass("top-nav-collapse");
        $(".navbar-brand img").removeClass("smallimg");
    }
});

//navbar-toggle x icon....

$(document).ready(function() {
    $(".navbar-toggler").on("click", function() {
        $(this).toggleClass("active");
    });
});


// scroll
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        });
        event.preventDefault();
    });
});



// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggler:visible').click();
});


// tooltip

$(function() {
    $('[data-toggle="tooltip"]').tooltip()
})

// form

$(document).ready(function() {
    var navListItems = $('div.setup-panel div a'),
        allWells = $('.setup-content'),
        allNextBtn = $('.nextBtn');

    allWells.hide();

    navListItems.click(function(e) {
        e.preventDefault();
        var $target = $($(this).attr('href')),
            $item = $(this);

        if (!$item.hasClass('disabled')) {
            navListItems.removeClass('btn-primary').addClass('btn-default');
            $item.addClass('btn-primary');
            allWells.hide();
            $target.show();
            $target.find('input:eq(0)').focus();
        }
    });

    allNextBtn.click(function() {
        var curStep = $(this).closest(".setup-content"),
            curStepBtn = curStep.attr("id"),
            nextStepWizard = $('div.setup-panel div a[href="#' + curStepBtn + '"]').parent().next().children("a"),
            curInputs = curStep.find("input,input[type='url']"),
            isValid = true;

        $(".setup-content").removeClass("has-error");
        for (var i = 0; i < curInputs.length; i++) {
            if (!curInputs[i].validity.valid) {
                isValid = false;
                $(curInputs[i]).closest(".setup-content").addClass("has-error");
            }
        }

        if (isValid)
            nextStepWizard.removeAttr('disabled').trigger('click');
    });

    $('div.setup-panel div a.btn-primary').trigger('click');
});

// new line for img
$('.setup-content img').on('click', function() {
    $(this).closest(".setup-content").removeClass("has-error");
});

$('.demo').on('click', function() {
    $('input[type="checkbox"]').prop('required', true);
});
$('input[type="checkbox"]').on('click', function() {
    $('input[type="checkbox"]').removeAttr('required');
});

// $('.demo').on('click', function() {
//                 if ('input[type="checkbox"]:checked') {
//                     $('input[type="checkbox"]').prop('required', true); //to add required
//                 } else {
//                     $('input[type="checkbox"]').prop('required', false); //to remove required
//                 }
//             });
$('.demo').click(function() {
    if ($('input[type="checkbox"]').is(':checked')) {
        $('input[type="checkbox"]').removeAttr('required');

    } else {
        $('input[type="checkbox"]').attr('required');
    }
});


// image radio

$(document).ready(function() {
    // add/remove checked class
    $(".image-radio").each(function() {
        if ($(this).find('input[type="radio"]').first().attr("checked")) {
            $(this).addClass('image-radio-checked');
        } else {
            $(this).removeClass('image-radio-checked');
        }
    });

    // sync the input state
    $(".image-radio").on("click", function(e) {
        $(".image-radio").removeClass('image-radio-checked');
        $(this).addClass('image-radio-checked');
        var $radio = $(this).find('input[type="radio"]');
        $radio.prop("checked", !$radio.prop("checked"));

        e.preventDefault();
    });
});



// slider


$('#carouselExample').on('slide.bs.carousel', function(e) {


    var $e = $(e.relatedTarget);
    var idx = $e.index();
    var itemsPerSlide = 4;
    var totalItems = $('.carousel-item').length;

    if (idx >= totalItems - (itemsPerSlide - 1)) {
        var it = itemsPerSlide - (totalItems - idx);
        for (var i = 0; i < it; i++) {
            // append slides to end
            if (e.direction == "left") {
                $('.carousel-item').eq(i).appendTo('.carousel-inner');
            } else {
                $('.carousel-item').eq(0).appendTo('.carousel-inner');
            }
        }
    }
});


$('#carouselExample').carousel({
    interval: 2000
});

//button up

$(document).ready(function() {
    var btnUp = $('<div/>', { 'class': 'btntoTop' });
    btnUp.appendTo('body');
    $(document)
        .on('click', '.btntoTop', function() {
            $('html, body').animate({
                scrollTop: 0
            }, 700);
        });

    $(window)
        .on('scroll', function() {
            if ($(this).scrollTop() > 200)
                $('.btntoTop').addClass('active');
            else
                $('.btntoTop').removeClass('active');
        });
});