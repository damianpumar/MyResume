export const masonry = {
  initialize: () => {
    $(window).on("resize debouncedresize", function() {
      masonry.refresh();
    });

    masonry.setup();
  },
  setup: () => {
    var masonryElement = $(".masonry, .gallery");
    if (masonryElement.length) {
      masonryElement.each(function(index, el) {
        masonry.refresh();
        $(el).imagesLoaded(function() {
          $(el).isotope({
            layoutMode: $(el).data("layout") ? $(el).data("layout") : "masonry"
          });
          masonry.refresh();
        });

        if (!$(el).data("isotope")) {
          var filters = $(el).siblings(".filters");
          if (filters.length) {
            filters.find("a").on("click", function() {
              var selector = $(this).attr("data-filter");
              $(el).isotope({ filter: selector });
              $(this)
                .parent()
                .addClass("current")
                .siblings()
                .removeClass("current");
              return false;
            });
          }
        }
      });
    }
  },
  refresh: () => {
    var masonry = $(".masonry");
    if (masonry.length) {
      masonry.each(function(index, el) {
        // check if isotope initialized
        if ($(el).data("isotope")) {
          var itemW = $(el).data("item-width");
          var containerW = $(el).width();
          var items = $(el).children(".hentry");
          var columns = Math.round(containerW / itemW);

          // set the widths (%) for each of item
          items.each(function(index, element) {
            var multiplier = $(this).hasClass("x2") && columns > 1 ? 2 : 1;
            var itemRealWidth =
              ((Math.floor(containerW / columns) * 100) / containerW) *
              multiplier;
            $(this).css("width", itemRealWidth + "%");
          });

          var columnWidth = Math.floor(containerW / columns);

          $(el).isotope("option", { masonry: { columnWidth: columnWidth } });
          $(el).isotope("layout");
        }
      });
    }
  }
};
