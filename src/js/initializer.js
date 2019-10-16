import { loader } from "./loader";
import { utilities } from "./utilities";
import { page } from "./pageTransition";
import { typist } from "./typist";
import { header } from "./header";
import { responsive } from "./responsive";
import { form } from "./form";
import { email } from "./email";
import { maps } from "./maps";
import { snackBar } from "./snackBar";
import { masonry } from "./masonry";

export const initializer = {
  initialize: () => {
    utilities.loadImagesAsync();
    loader.initialize();
    maps.intialize();
    utilities.initializeFillBars();
    header.initialize();
    responsive.initialize();
    form.applyValidators();
    email.initialize();
    page.initialize();
    snackBar.initialize();
    typist.initialize();
    utilities.initializeHoursWorked();
    utilities.initializeAge();
    utilities.initializeStamp();
    masonry.initialize();
  }
};
