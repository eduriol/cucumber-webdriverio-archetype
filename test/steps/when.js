import makeSearch from '../support/action/makeSearch';

module.exports = function when() {
    this.When(
        /^we search for "([^"]*)?"$/,
        makeSearch
    );
};
