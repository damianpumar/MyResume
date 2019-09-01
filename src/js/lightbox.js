export const lightbox = {
  setup: () => {
    if ($(".lightbox, .gallery").length) {
      $(".media-box, .gallery").each(function(index, element) {
        var $media_box = $(this);
        $media_box.magnificPopup({
          delegate: ".lightbox, .gallery-item a",
          type: "image",
          image: {
            markup:
              '<div class="mfp-figure">' +
              '<div class="mfp-close"></div>' +
              '<div class="mfp-img"></div>' +
              "</div>" +
              '<div class="mfp-bottom-bar">' +
              '<div class="mfp-title"></div>' +
              '<div class="mfp-counter"></div>' +
              "</div>",

            cursor: "mfp-zoom-out-cur",
            verticalFit: true,
            tError: '<a href="%url%">The image</a> could not be loaded.'
          },
          gallery: {
            enabled: true,
            tCounter: '<span class="mfp-counter">%curr% / %total%</span>'
          },
          iframe: {
            markup:
              '<div class="mfp-iframe-scaler">' +
              '<div class="mfp-close"></div>' +
              '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
              '<div class="mfp-title">Some caption</div>' +
              "</div>"
          },
          mainClass: "mfp-zoom-in",
          tLoading: "",
          removalDelay: 300,
          callbacks: {
            markupParse: function(template, values, item) {
              var title = "";
              if (item.el.parents(".gallery-item").length) {
                title = item.el
                  .parents(".gallery-item")
                  .find(".gallery-caption")
                  .text();
              } else {
                title =
                  item.el.attr("title") == undefined
                    ? ""
                    : item.el.attr("title");
              }
              values.title = title;
            },
            imageLoadComplete: function() {
              var self = this;
              setTimeout(function() {
                self.wrap.addClass("mfp-image-loaded");
              }, 16);
            },
            close: function() {
              this.wrap.removeClass("mfp-image-loaded");
            },
            beforeAppend: function() {
              var self = this;
              this.content.find("iframe").on("load", function() {
                setTimeout(function() {
                  self.wrap.addClass("mfp-image-loaded");
                }, 16);
              });
            }
          },
          closeBtnInside: false,
          closeOnContentClick: true,
          midClick: true
        });
      });
    }
  }
};
