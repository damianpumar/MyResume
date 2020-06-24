import { loader } from "./loader";
import { utilities } from "./utilities";
import { page } from "./pageTransition";
import { header } from "./header";
import { responsive } from "./responsive";
import { form } from "./form";
import { email } from "./email";
import { snackBar } from "./snackBar";
import { words } from "./words";
import { twitter } from "./twitter";
import { lightBox } from "./light-box";
import { opacity } from "./opacity";

export const initializer = {
  initialize: () => {
    opacity.loadBody();
    page.initialize();
    lightBox.initialize();
    utilities.loadImagesAsync();
    loader.initialize();
    utilities.initializeFillBars();
    header.initialize();
    responsive.initialize();
    form.applyValidators();
    email.initialize();
    snackBar.initialize();
    utilities.initializeHoursWorked();
    utilities.initializeAge();
    utilities.initializeStamp();
    utilities.loadTooltips();
    words.initializeRotation();
    twitter.initialize();
  }
};
