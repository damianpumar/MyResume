export const snackBar = {
  initialize: () => {
    $(window).load(function() {
      window.setTimeout(show, 2000);
    });
  }
};
function show() {
  var snackBarWasShown = window.localStorage.getItem("_sbSW");

  if (snackBarWasShown) return;

  var snackbar = $(".snackbar");

  if (!snackbar) return;

  snackbar.fadeIn("slow");

  window.setTimeout(function() {
    snackbar.fadeOut();
  }, 6000);

  hideWhenClicked(snackbar);
}
function hideWhenClicked(snackbar) {
  $(".snackbar").click(function(e) {
    snackbar.hide();

    window.localStorage.setItem("_sbSW", "true");
  });
}
