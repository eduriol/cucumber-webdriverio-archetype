import { defineSupportCode } from 'cucumber';

import openWebsite from '../support/action/openWebsite';

defineSupportCode(({ Given }) => {
    Given(
        /^we enter (url|site) "([^"]*)?"$/,
        openWebsite
    );
});
