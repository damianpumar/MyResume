/*!
 * FullCoders v1.18.0117.1 (https://www.fullcoders.com)
 * Copyright 2018 FullCoders
 * Licensed under MIT (https://gitlab.com/fullcoders/NewMyResume)
 */
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var header={initialize:function(){$(".search-toggle").on("click",function(){$("html").toggleClass("is-search-toggled-on"),$(".search-box input").trigger("focus")}),$(".menu-toggle").on("click",function(){$("html").toggleClass("is-menu-toggled-on")});$(".toggle h4.active + .toggle-content").show(),$(".toggle h4").on("click",function(){return $(this).hasClass("active")?($(this).removeClass("active"),$(this).next(".toggle-content").stop(!0,!0).slideUp(300)):($(this).addClass("active"),$(this).next(".toggle-content").stop(!0,!0).slideDown(300),$(this).parents(".toggle-group").hasClass("accordion")&&($(this).parent().siblings().find("h4").removeClass("active"),$(this).parent().siblings().find(".toggle-content").stop(!0,!0).slideUp(300))),!1}),$("select:not([multiple]), input:checkbox, input:radio, input:file").uniform(),-1<navigator.userAgent.toLowerCase().indexOf("android")&&$("html").addClass("android")}};exports.header=header;