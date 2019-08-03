import { page } from "./pageTransition";

export const snackBar = {
  initialize: () => {
    $(window).load(function() {
      window.setTimeout(show, 2000);
    });

    function show() {
      // var snackBarWasShown = $.cookie("_sbSW");

      // if (!snackBarWasShown) {
      var snackbar = $("#snackbar");

      // if (snackbar) {
      snackbar.fadeIn("slow");

      window.setTimeout(function() {
        snackbar.fadeOut();
      }, 6000);

      $("#snackbar a").click(function(e) {
        snackbar.hide();
      });

      var expireDate = new Date();

      expireDate.setDate(expireDate.getDate() + 2);

      // $.cookie("_sbSW", "true", { path: "/", expires: expireDate });
    }
  }
};
