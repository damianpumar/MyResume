// The magic number: 31557600000 is 24 * 3600 * 365.25 * 1000
// Which is the length of a year, the length of a year is 365 days and 6 hours
// which is 0.25 day.
const maginNumber = 31557600000;

export const utilities = {
  loadImagesAsync: () => {
    "use strict";
    const objects = document.getElementsByClassName("asyncImage");

    Array.from(objects).map(item => {
      const img = new Image();

      img.src = item.dataset.src;

      img.onload = () => {
        item.classList.remove("asyncImage");
        return item.nodeName === "IMG"
          ? (item.src = item.dataset.src)
          : (item.style.backgroundImage = `url(${item.dataset.src})`);
      };
    });
  },

  initializeHoursWorked: () => {
    var startWork = new Date(2011, 1, 1, 0, 0);
    var now = new Date();
    var daysDifference = now.getTime() - startWork.getTime();
    var yearsDifference = now.getYear() - startWork.getYear();
    //2 days * 24 hours per day * month * 12 month per year i not work and 15 days vacation
    var hoursNotWorked = (2 * 24 * 4 * 12 + 15) * yearsDifference;
    var hoursWorked =
      ((daysDifference / (1000 * 60 * 60 * 24)) * 24) / 2.1 - hoursNotWorked;
    var hoursWorkedMask = Math.trunc(hoursWorked)
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    $("#hoursWorked").text(hoursWorkedMask + " Working Hours");
  },

  initializeAge: () => {
    var birthday = Date.parse("1991/11/06");
    var age = ~~((Date.now() - birthday) / maginNumber);

    $("#age").text(age + " years old");
  },

  // initializeLightBox: () => {
  //     if ($(".lightbox, .gallery").length) {
  //         $('.media-box, .gallery').each(function (index, element) {
  //             var $media_box = $(this);
  //             $media_box.magnificPopup({
  //                 delegate: '.lightbox, .gallery-item a',
  //                 type: 'image',
  //                 image: {
  //                     markup: '<div class="mfp-figure">' + '<div class="mfp-close"></div>' + '<div class="mfp-img"></div>' + '</div>' + '<div class="mfp-bottom-bar">' + '<div class="mfp-title"></div>' + '<div class="mfp-counter"></div>' + '</div>', // Popup HTML markup. `.mfp-img` div will be replaced with img tag, `.mfp-close` by close button
  //                     cursor: 'mfp-zoom-out-cur', // Class that adds zoom cursor, will be added to body. Set to null to disable zoom out cursor.
  //                     verticalFit: true, // Fits image in area vertically
  //                     tError: '<a href="%url%">The image</a> could not be loaded.' // Error message
  //                 },
  //                 gallery: {
  //                     enabled: true,
  //                     tCounter: '<span class="mfp-counter">%curr% / %total%</span>' // markup of counter
  //                 },
  //                 iframe: {
  //                     markup: '<div class="mfp-iframe-scaler">' + '<div class="mfp-close"></div>' + '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' + '<div class="mfp-title">Some caption</div>' + '</div>'
  //                 },
  //                 mainClass: 'mfp-zoom-in',
  //                 tLoading: '',
  //                 removalDelay: 300, //delay removal by X to allow out-animation
  //                 callbacks: {
  //                     markupParse: function (template, values, item) {
  //                         var title = "";
  //                         if (item.el.parents('.gallery-item').length) {
  //                             title = item.el.parents('.gallery-item').find('.gallery-caption').text();
  //                         } else {
  //                             title = item.el.attr('title') == undefined ? "" : item.el.attr('title');
  //                         }
  //                         //return title;
  //                         values.title = title;
  //                     },
  //                     imageLoadComplete: function () {
  //                         var self = this;
  //                         setTimeout(function () {
  //                             self.wrap.addClass('mfp-image-loaded');
  //                         }, 16);
  //                     },
  //                     close: function () {
  //                         this.wrap.removeClass('mfp-image-loaded');
  //                     },
  //                     beforeAppend: function () {
  //                         var self = this;
  //                         this.content.find('iframe').on('load', function () {
  //                             setTimeout(function () {
  //                                 self.wrap.addClass('mfp-image-loaded');
  //                             }, 16);
  //                         });
  //                     }
  //                 },
  //                 closeBtnInside: false,
  //                 closeOnContentClick: true,
  //                 midClick: true
  //             });
  //         });
  //     }
  // },

  initializeFillBars: () => {
    var initialized = false;

    window.addEventListener("pageChanged", function(e) {
      if (!initialized && e && e.detail == "resume") {
        $(".bar").each(function() {
          var bar = $(this);
          var percent = bar.attr("data-percent");
          bar
            .find(".progress")
            .css("width", percent + "%")
            .html("<span>" + percent + "</span>");
        });
        initialized = true;
      }
    });
  }
};
