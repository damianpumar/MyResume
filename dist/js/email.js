/*!
 * FullCoders v1.18.0117.1 (https://www.fullcoders.com)
 * Copyright 2018 FullCoders
 * Licensed under MIT (https://gitlab.com/fullcoders/NewMyResume)
 */
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var email={initialize:function(){var i=$("#contact-form"),a=$(".site-alert"),s=i.find(".submit");i.submit(function(e){var t;e.preventDefault(),(t=i).valid()&&(NProgress.start(),s.addClass("active loading"),$.ajax({url:t.attr("action"),type:t.attr("method"),dataType:"JSON",crossDomain:!0,contentType:"application/json; charset=utf-8",data:JSON.stringify(t.serializeObject()),success:function(e){t.clearForm()},error:function(e,t){a.addClass("error")},complete:function(){NProgress.done(),a.show(),setTimeout(function(){a.hide()},6e3)}}))}),$.fn.serializeObject=function(){var e={},t=this.serializeArray();return $.each(t,function(){void 0!==e[this.name]?(e[this.name].push||(e[this.name]=[e[this.name]]),e[this.name].push(this.value||"")):e[this.name]=this.value||""}),e},$.fn.clearForm=function(){return this.each(function(){var e=this.type,t=this.tagName.toLowerCase();if("form"==t)return $(":input",this).clearForm();"text"==e||"password"==e||"textarea"==t||"email"==e?this.value="":"checkbox"==e||"radio"==e?this.checked=!1:"select"==t&&(this.selectedIndex=-1)})}}};exports.email=email;