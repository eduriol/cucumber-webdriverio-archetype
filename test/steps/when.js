import { defineSupportCode } from 'cucumber';

import makeSearch from '../support/action/makeSearch';

defineSupportCode(({ When }) => {
    When(
        /^we search for "([^"]*)?"$/,
        makeSearch
    );
});
