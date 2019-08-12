import { page } from "./pageTransition";

export const snackBar = {
  initialize: () => {
    $(window).load(function() {
      window.setTimeout(show, 2000);
    });
  }
};
function show() {
  var snackBarWasShown = $.cookie("_sbSW");

  if (snackBarWasShown) return;

  var snackbar = $("#snackbar");

  if (!snackbar) return;

  snackbar.fadeIn("slow");

  window.setTimeout(function() {
    snackbar.fadeOut();
  }, 6000);

  hideWhenClicked(snackbar);
}
function hideWhenClicked(snackbar) {
  $("#snackbar a").click(function(e) {
    snackbar.hide();

    saveCookies();
  });
}
function saveCookies() {
  var expireDate = new Date();
  expireDate.setDate(expireDate.getDate() + 2);
  $.cookie("_sbSW", "true", { path: "/", expires: expireDate });
}
