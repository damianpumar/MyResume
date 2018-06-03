/*!
 * FullCoders v1.18.0117.1 (https://www.fullcoders.com)
 * Copyright 2018 FullCoders
 * Licensed under MIT (https://gitlab.com/fullcoders/NewMyResume)
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var typist = {

    initialize: function initialize() {

        var typist = document.querySelector("#typist-element");

        new Typist(typist, {
            letterInterval: 60,
            textInterval: 3000
        });
    }
};

exports.typist = typist;
