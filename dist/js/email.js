/*!
 * FullCoders v1.18.0117.1 (https://www.fullcoders.com)
 * Copyright 2018 FullCoders
 * Licensed under MIT (https://gitlab.com/fullcoders/NewMyResume)
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var email = {
    initialize: function initialize() {
        var contactForm = $('#contact-form');
        var $alert = $('.site-alert');
        var $submit = contactForm.find('.submit');
        contactForm.submit(function (event) {
            event.preventDefault();
            sendEmail(contactForm);
        });

        function sendEmail(contactForm) {
            if (contactForm.valid()) {
                NProgress.start();
                $submit.addClass("active loading");
                $.ajax({
                    url: contactForm.attr('action'),
                    type: contactForm.attr('method'),
                    dataType: "JSON",
                    crossDomain: true,
                    contentType: 'application/json; charset=utf-8',
                    data: JSON.stringify(contactForm.serializeObject()),
                    success: function success(data) {
                        contactForm.clearForm();
                    },
                    error: function error(textStatus, errorThrown) {
                        $alert.addClass('error');
                    },
                    complete: function complete() {
                        NProgress.done();
                        $alert.show();
                        setTimeout(function () {
                            $alert.hide();
                        }, 6000);
                    }
                });
            }        }        $.fn.serializeObject = function () {
            var o = {};
            var a = this.serializeArray();
            $.each(a, function () {
                if (o[this.name] !== undefined) {
                    if (!o[this.name].push) {
                        o[this.name] = [o[this.name]];
                    }
                    o[this.name].push(this.value || '');
                } else {
                    o[this.name] = this.value || '';
                }
            });
            return o;
        };
        $.fn.clearForm = function () {
            return this.each(function () {
                var type = this.type,
                    tag = this.tagName.toLowerCase();
                if (tag == 'form') return $(':input', this).clearForm();
                if (type == 'text' || type == 'password' || tag == 'textarea' || type == 'email') this.value = '';else if (type == 'checkbox' || type == 'radio') this.checked = false;else if (tag == 'select') this.selectedIndex = -1;
            });
        };
    }
};

exports.email = email;
