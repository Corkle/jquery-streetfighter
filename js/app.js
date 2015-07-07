$(document).ready(function () {
    playIntro();
    main();
});

function playHadouken() {
    $('#hadouken-sound')[0].volume = 0.5;
    $('#hadouken-sound')[0].load();
    $('#hadouken-sound')[0].play();
}

function playIntro() {
    $('#theme-song')[0].volume = 0.5;
    $('#theme-song')[0].play();
    $('.sf-logo').fadeIn(3500, function () {
        $(this).fadeOut(1000, function () {
            $('.brought-by').fadeIn(1500, function () {
                $(this).fadeOut(1000, function () {
                    $('.jquery-logo').fadeIn(1500, function () {
                        $(this).fadeOut(1000, function () {
                            $('.instruction-text').fadeIn(1000);
                        })
                    })
                })
            })
        })
    })
}

function playCoolSound() {
//    $('#theme-song')[0].pause();
    $('#cool-sound')[0].volume = 0.5;
    $('#cool-sound')[0].play();
}

function main() {
    $('.ryu').mouseenter(function () {
            $('.ryu').children().hide();
            $('.ryu-ready').show();
        })
        .mouseleave(function () {
            $('.ryu').children().hide();
            $('.ryu-still').show();
        })
        .mousedown(function () {
            playHadouken();
            $('.ryu').children().hide();
            $('.ryu-throwing').show();
            $('.hadouken').finish().show()
                .animate({
                    'left': '1020px'
                }, 500, function () {
                    $(this).hide();
                    $(this).css('left', '550px');
                });
        })
        .mouseup(function () {
            $('.ryu').children().hide();
            $('.ryu-ready').show();
        })

    $('body').keydown(function (event) {
            if (event.keyCode == 88) {
                $('#theme-song')[0].volume = 0;
                playCoolSound();
                $('.ryu').children().hide();
                $('.ryu-cool').show();
            };
        })
        .keyup(function (event) {
            if (event.keyCode == 88) {
                $('#cool-sound')[0].pause();
                $('#cool-sound')[0].load();
                $('#theme-song')[0].volume = .5;
                $('.ryu').children().hide();
                $('.ryu-still').show();
            };
        });
}