export const snackBar = {

    initialize: () => {

    	var snackBarWasShown = $.cookie("_sbSW") 

		if(!snackBarWasShown) {
	        var snackbar = document.getElementById("snackbar");

	        if (snackbar) {
	            snackbar.className = "show";
	            window.setTimeout(function () {
	                snackbar.className = "hide"
	            }, 6000);

				var expireDate = new Date;

      			expireDate.setDate(expireDate.getDate() + 2);

	            $.cookie("_sbSW", "true", { path: '/', expires: expireDate });
	        }
    	}
    }

}