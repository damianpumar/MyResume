import { loader } from './loader'
import { utilities } from './utilities'
import { page } from './pageTransition'
import { maps } from './maps'
import { typist } from './typist'
import { snackBar } from './snackBar';
import { initializer } from './initializer';

(function ($) {
    "use strict";
    initializer.initialize();

    window.onload = function () {
        loader.hide();
        utilities.initializeHoursWorked();
        utilities.initializeAge();
        typist.initialize();
        maps.intialize();
    };

    window.nextPage = function (index) {
        return new page.nextPage(index);
    };

    window.setTimeout(snackBar.initialize, 3000);
})(jQuery);