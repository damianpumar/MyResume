/*!
 * FullCoders v1.18.0117.1 (https://www.fullcoders.com)
 * Copyright 2018 FullCoders
 * Licensed under MIT (https://gitlab.com/fullcoders/NewMyResume)
 */
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var utilities={initializeHoursWorked:function(){var e=new Date(2011,1,1,0,0),t=new Date,i=(t.getTime()-e.getTime())/864e5*24/2.1-2319*(t.getYear()-e.getYear()),a=Math.trunc(i).toString().replace(/\B(?=(\d{3})+(?!\d))/g,".");$("#hoursWorked").text(a+" Working Hours")},initializeAge:function(){var e=new Date(1991,11,6,0,0),t=Date.now()-e.getTime(),i=new Date(t);$("#age").text(i.getFullYear()-1970+" years old")},initializeFillBars:function(){var t=!1;window.addEventListener("pageChanged",function(e){!t&&e&&"resume"==e.detail&&($(".bar").each(function(){var e=$(this),t=e.attr("data-percent");e.find(".progress").css("width",t+"%").html("<span>"+t+"</span>")}),t=!0)})}};exports.utilities=utilities;