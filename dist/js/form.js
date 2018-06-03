/*!
 * FullCoders v1.18.0117.1 (https://www.fullcoders.com)
 * Copyright 2018 FullCoders
 * Licensed under MIT (https://gitlab.com/fullcoders/NewMyResume)
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var form = {
    applyValidators: function applyValidators() {
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
};

exports.form = form;
