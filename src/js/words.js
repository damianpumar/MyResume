export const words = {
    initializeRotation: () => {
        var rotate_words = $('.rotate-words');
        var next_word_index;
        if (rotate_words.length) {

            if (Modernizr.csstransforms) {

                rotate_words.each(function (index, element) {
                    $(element).find('span').eq(0).addClass('active');
                    setInterval(function () {
                        next_word_index = $(element).find('.active').next().length ? $(element).find('.active').next().index() : 0;
                        $(element).find('.active').addClass('rotate-out').removeClass('rotate-in active').css("display", "none");
                        $(element).find('span').eq(next_word_index).addClass('rotate-in active').removeClass('rotate-out').css("display", "block");
                    }, 3000);
                });

            }
            else {

                rotate_words.each(function (index, element) {
                    $(element).find('span').eq(0).addClass('active').show();
                    setInterval(function () {
                        next_word_index = $(element).find('.active').next().length ? $(element).find('.active').next().index() : 0;
                        $(element).find('.active').removeClass('active').css("display", "none").slideUp(500);
                        $(element).find('span').eq(next_word_index).addClass('active').css("display", "block").slideDown(500);
                    }, 3000);
                });
            }
        }
    }
}