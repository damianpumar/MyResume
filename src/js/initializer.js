import { mansonry } from "./masonry";
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

export const initializer = {
  initialize: () => {
    utilities.loadImagesAsync();
    loader.show();
    maps.intialize();
    utilities.initializeFillBars();
    header.initialize();
    responsive.initialize();
    form.applyValidators();
    email.initialize();
    page.initialize();
    snackBar.initialize();
  }
};
