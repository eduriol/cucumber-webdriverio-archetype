import checkSearchWithoutResult from '../support/check/checkSearchWithoutResult';

module.exports = function then() {
    this.Then(
        /^the results message shows "([^"]*)?"$/,
        checkSearchWithoutResult
    );
};
