/*!
 * FullCoders v1.18.0117.1 (https://www.fullcoders.com)
 * Copyright 2018 FullCoders
 * Licensed under MIT (https://gitlab.com/fullcoders/NewMyResume)
 */
import { mansonry } from './masonry'
import { loader } from './loader'
import { utilities } from './utilities'
import { page } from './pageTransition'
import { typist } from './typist'
import { header } from './header'
import { responsive } from './responsive'
import { form } from './form';
import { email } from './email';

export const initializer = {
    initialize: () => {
        loader.show();
        utilities.initializeFillBars();
        header.initialize();
        responsive.initialize();
        form.applyValidators();
        email.initialize();
        page.initialize();
    }
}