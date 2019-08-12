import { loader } from "./loader";
import { page } from "./pageTransition";
import { initializer } from "./initializer";

(function($) {
  "use strict";
  initializer.initialize();

  $(window).load(function() {
    loader.hide();
  });

  window.nextPage = function(index) {
    return new page.nextPage(index);
  };
})(jQuery);
