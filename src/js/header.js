export const header = {

    initialize: () => {

        $('.search-toggle').on("click", function () {
            $('html').toggleClass('is-search-toggled-on');
            $(".search-box input").trigger("focus");
        });
        $('.menu-toggle').on("click", function () {
            $('html').toggleClass('is-menu-toggled-on');
        });

        var toggleSpeed = 300;
        $('.toggle h4.active + .toggle-content').show();
        $('.toggle h4').on("click", function () {
            if ($(this).hasClass('active')) {
                $(this).removeClass('active');
                $(this).next('.toggle-content').stop(true, true).slideUp(toggleSpeed);
            } else {
                $(this).addClass('active');
                $(this).next('.toggle-content').stop(true, true).slideDown(toggleSpeed);

                if ($(this).parents('.toggle-group').hasClass('accordion')) {
                    $(this).parent().siblings().find('h4').removeClass('active');
                    $(this).parent().siblings().find('.toggle-content').stop(true, true).slideUp(toggleSpeed);
                }
            }
            return false;
        });

        $("select:not([multiple]), input:checkbox, input:radio, input:file").uniform();
        var ua = navigator.userAgent.toLowerCase();
        var isAndroid = ua.indexOf("android") > -1;
        if (isAndroid) {
            $('html').addClass('android');
        }
    }
}