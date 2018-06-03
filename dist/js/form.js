/*!
 * FullCoders v1.18.0117.1 (https://www.fullcoders.com)
 * Copyright 2018 FullCoders
 * Licensed under MIT (https://gitlab.com/fullcoders/NewMyResume)
 */
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var form={applyValidators:function(){$("#commentform").addClass("validate-form"),$("#commentform").find("input,textarea").each(function(a,t){"true"===$(this).attr("aria-required")&&$(this).addClass("required"),"email"===$(this).attr("name")&&$(this).addClass("email")}),$(".validate-form").length&&$(".validate-form").each(function(){$(this).validate()})}};exports.form=form;