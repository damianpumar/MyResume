/*!
 * FullCoders v1.18.0117.1 (https://www.fullcoders.com)
 * Copyright 2018 FullCoders
 * Licensed under MIT (https://gitlab.com/fullcoders/NewMyResume)
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var snackBar = {

    initialize: function initialize() {
        var snackbar = document.getElementById("snackbar");

        if (snackbar) {
            snackbar.className = "show";
            window.setTimeout(function () {
                snackbar.className = "hide";
            }, 6000);
        }
    }

};

exports.snackBar = snackBar;
