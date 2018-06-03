export const snackBar = {

    initialize: () => {
        var snackbar = document.getElementById("snackbar");

        if (snackbar) {
            snackbar.className = "show";
            window.setTimeout(function () {
                snackbar.className = "hide"
            }, 6000);
        }
    }

}