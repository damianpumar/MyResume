export const slider = {
    initialize: () => {
        const flexSlider = $('.flexslider');
        if (flexSlider.length) {

            flexSlider.each(function () {

                $(this).imagesLoaded(function () {

                    $(this).find('.loading').remove();

                    $(this).flexslider({
                        smoothHeight: true,
                        slideshow: $(this).attr('data-autoplay') != "false",
                        slideshowSpeed: $(this).attr('data-interval'),
                        animationSpeed: $(this).attr('data-animationSpeed'),
                        animation: $(this).attr('data-animation'),
                        direction: $(this).attr('data-direction'),
                        directionNav: $(this).attr('data-directionNav') != "false",
                        controlNav: $(this).attr('data-controlNav') != "false",
                        randomize: $(this).attr('data-randomize') == "true",
                        startAt: $(this).attr('data-startAt') != null ? parseInt($(this).attr('data-startAt')) : 0,
                        animationLoop: $(this).attr('data-animationLoop') != "false",
                        pauseOnHover: $(this).attr('data-pauseOnHover') != "false",
                        reverse: $(this).attr('data-reverse') == "true",
                        prevText: "",
                        nextText: "",
                        start: function (slider) {
                            slider.find('li img').click(function (event) {
                                event.preventDefault();
                                slider.flexAnimate(slider.getTarget("next"));
                            });
                        }
                    });

                });

            });
        }
    }
}