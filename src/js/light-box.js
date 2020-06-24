export const lightBox = {
    initialize: () => {
        $('.lightbox').each(function (index, element) {
            $(this).attr('rel', $(this).attr('data-lightbox-gallery'));
        });

        if ($("a[rel^='fancybox']").length) {
            $("a[rel^='fancybox']").fancybox({
                centerOnScroll: true,
                padding: 10,
                margin: 44,
                width: 640,
                height: 360,
                transitionOut: 'none',
                overlayColor: '#BEBD97',
                overlayOpacity: '.6',
                onStart: function () {
                    NProgress.start();
                    $('body').addClass('lightbox-active');
                },
                onClosed: function () {
                    $('body').removeClass('lightbox-active');
                },
                onComplete: function () {
                    NProgress.done();
                    if ($(this).attr('href').indexOf("soundcloud.com") >= 0) {
                        $('#fancybox-content').height(166);
                    }
                }
            });
        }
    }
}