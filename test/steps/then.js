import { defineSupportCode } from 'cucumber';

import checkSearchWithoutResult from '../support/check/checkSearchWithoutResult';

defineSupportCode(({ Then }) => {
    Then(
        /^the results message shows "([^"]*)?"$/,
        checkSearchWithoutResult
    );
});
