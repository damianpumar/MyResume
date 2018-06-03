export const form = {
    applyValidators: () => {
        $('#commentform').addClass('validate-form');
        $('#commentform').find('input,textarea').each(function (index, element) {
            if ($(this).attr('aria-required') === "true") {
                $(this).addClass('required');
            }
            if ($(this).attr('name') === "email") {
                $(this).addClass('email');
            }
        });

        if ($('.validate-form').length) {
            $('.validate-form').each(function () {
                $(this).validate();
            });
        }
    }
}